use serde::Serialize;
use std::process::Command;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct EnvironmentStatus {
    wsl_available: bool,
    distro: Option<String>,
    wsl_version: Option<u8>,
    running: bool,
    ssh_available: Option<bool>,
}

fn decode_output(bytes: &[u8]) -> String {
    let has_bom = bytes.starts_with(&[0xff, 0xfe]);

    let looks_utf16 = bytes
        .iter()
        .skip(1)
        .step_by(2)
        .take(32)
        .filter(|byte| **byte == 0)
        .count()
        > 8;

    if has_bom || looks_utf16 {
        let start = if has_bom { 2 } else { 0 };

        let utf16 = bytes[start..]
            .chunks_exact(2)
            .map(|chunk| u16::from_le_bytes([chunk[0], chunk[1]]))
            .collect::<Vec<_>>();

        return String::from_utf16_lossy(&utf16);
    }

    String::from_utf8_lossy(bytes).into_owned()
}

fn parse_distro_line(line: &str) -> Option<(String, u8)> {
    let line = line
        .trim()
        .trim_start_matches('*')
        .trim();

    let parts = line.split_whitespace().collect::<Vec<_>>();

    if parts.len() < 3 {
        return None;
    }

    let version = parts.last()?.parse::<u8>().ok()?;

    if version != 1 && version != 2 {
        return None;
    }

    let name = parts[..parts.len() - 2].join(" ");

    if name.is_empty() {
        return None;
    }

    Some((name, version))
}

fn get_default_distro(output: &str) -> Option<(String, u8)> {
    if let Some(default) = output
        .lines()
        .find(|line| line.trim_start().starts_with('*'))
        .and_then(parse_distro_line)
    {
        return Some(default);
    }

    output.lines().find_map(parse_distro_line)
}

fn is_distro_running(distro: &str) -> bool {
    let output = match Command::new("wsl.exe")
        .args(["--list", "--running", "--quiet"])
        .output()
    {
        Ok(output) => output,
        Err(_) => return false,
    };

    if !output.status.success() {
        return false;
    }

    let stdout = decode_output(&output.stdout);

    stdout
        .lines()
        .map(str::trim)
        .any(|running_distro| running_distro.eq_ignore_ascii_case(distro))
}

fn is_ssh_available(distro: &str) -> bool {
    Command::new("wsl.exe")
        .args([
            "--distribution",
            distro,
            "sh",
            "-lc",
            "command -v ssh >/dev/null 2>&1",
        ])
        .status()
        .map(|status| status.success())
        .unwrap_or(false)
}

#[tauri::command]
pub fn get_environment_status() -> EnvironmentStatus {
    let output = match Command::new("wsl.exe")
        .args(["--list", "--verbose"])
        .output()
    {
        Ok(output) => output,
        Err(_) => {
            return EnvironmentStatus {
                wsl_available: false,
                distro: None,
                wsl_version: None,
                running: false,
                ssh_available: None,
            };
        }
    };

    if !output.status.success() {
        return EnvironmentStatus {
            wsl_available: false,
            distro: None,
            wsl_version: None,
            running: false,
            ssh_available: None,
        };
    }

    let stdout = decode_output(&output.stdout);

    let Some((distro, wsl_version)) = get_default_distro(&stdout) else {
        return EnvironmentStatus {
            wsl_available: false,
            distro: None,
            wsl_version: None,
            running: false,
            ssh_available: None,
        };
    };

    let running = is_distro_running(&distro);

    let ssh_available = if running {
        Some(is_ssh_available(&distro))
    } else {
        None
    };

    EnvironmentStatus {
        wsl_available: true,
        distro: Some(distro),
        wsl_version: Some(wsl_version),
        running,
        ssh_available,
    }
}