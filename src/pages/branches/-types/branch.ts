export type BranchStatus = 'current' | 'worktree' | 'merged' | 'stale';

export type BranchHealth = 'clean' | 'behind' | 'ahead' | null;

export type Branch = {
	id: string;
	name: string;
	status: BranchStatus;
	health: BranchHealth;
	lastUpdated: string;
	ahead: number;
	behind: number;
	upstream: string | null;
	lastCommitHash: string;
	worktreePath: string | null;
};
