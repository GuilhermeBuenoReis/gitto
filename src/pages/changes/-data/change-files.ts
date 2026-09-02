import type { ChangeFile } from '../-types/change-file';

export const changeFiles: ChangeFile[] = [
	{
		id: '1',
		name: 'team.ts',
		path: 'src/modules/teams/team.ts',
		status: 'modified',
		additions: 14,
		deletions: 3,
		diff: [
			{
				oldLine: 28,
				newLine: 28,
				content: '@@ -28,6 +28,10 @@ export async function openRepo(path) {',
				type: 'context',
			},
			{
				oldLine: 29,
				newLine: 29,
				content: 'const distro = await detectDistro(path)',
				type: 'context',
			},
			{
				oldLine: null,
				newLine: 30,
				content: 'if (!distro) throw new WslEnvironmentError(path)',
				type: 'added',
			},
			{
				oldLine: null,
				newLine: 31,
				content: 'await ensureSshAgent(distro)',
				type: 'added',
			},
			{
				oldLine: 30,
				newLine: 32,
				content: 'return bridge.open(path)',
				type: 'context',
			},
			{
				oldLine: null,
				newLine: 34,
				content: "export type WslDistro = 'Ubuntu' | 'Debian'",
				type: 'added',
			},
		],
	},
	{
		id: '2',
		name: 'team.repository.ts',
		path: 'src/modules/teams/team.repository.ts',
		status: 'modified',
		additions: 8,
		deletions: 2,
		diff: [
			{
				oldLine: 14,
				newLine: 14,
				content: 'export class TeamRepository {',
				type: 'context',
			},
			{
				oldLine: null,
				newLine: 15,
				content: 'async findByWorktree(worktree: string) {',
				type: 'added',
			},
			{
				oldLine: null,
				newLine: 16,
				content: 'return this.teams.find((team) => team.worktree === worktree)',
				type: 'added',
			},
		],
	},
	{
		id: '3',
		name: 'wsl-bridge.ts',
		path: 'src/infrastructure/wsl/wsl-bridge.ts',
		status: 'added',
		additions: 88,
		deletions: 0,
		diff: [
			{
				oldLine: null,
				newLine: 1,
				content: "import { invoke } from '@tauri-apps/api/core'",
				type: 'added',
			},
			{
				oldLine: null,
				newLine: 2,
				content: '',
				type: 'added',
			},
			{
				oldLine: null,
				newLine: 3,
				content: 'export async function openRepository(path: string) {',
				type: 'added',
			},
			{
				oldLine: null,
				newLine: 4,
				content: "return invoke('open_repository', { path })",
				type: 'added',
			},
		],
	},
	{
		id: '4',
		name: 'legacy-shell.ts',
		path: 'src/infrastructure/shell/legacy-shell.ts',
		status: 'deleted',
		additions: 0,
		deletions: 42,
		diff: [
			{
				oldLine: 1,
				newLine: null,
				content: "import { Command } from '@tauri-apps/plugin-shell'",
				type: 'removed',
			},
			{
				oldLine: 2,
				newLine: null,
				content: '',
				type: 'removed',
			},
			{
				oldLine: 3,
				newLine: null,
				content: 'export async function execute(command: string) {',
				type: 'removed',
			},
			{
				oldLine: 4,
				newLine: null,
				content: 'return Command.create(command).execute()',
				type: 'removed',
			},
		],
	},
];
