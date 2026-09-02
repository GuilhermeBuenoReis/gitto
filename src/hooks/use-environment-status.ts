import { invoke } from '@tauri-apps/api/core';
import { useEffect, useState } from 'react';

type EnvironmentStatus = {
	wslAvailable: boolean;
	distro: string | null;
	wslVersion: number | null;
	running: boolean;
	sshAvailable: boolean | null;
};

export function useEnvironmentStatus() {
	const [environment, setEnvironment] = useState<EnvironmentStatus | null>(
		null,
	);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadEnvironment() {
			try {
				const environmentStatus = await invoke<EnvironmentStatus>(
					'get_environment_status',
				);

				setEnvironment(environmentStatus);
			} finally {
				setIsLoading(false);
			}
		}

		loadEnvironment();
	}, []);

	return {
		environment,
		isLoading,
	};
}
