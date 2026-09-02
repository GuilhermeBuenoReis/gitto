export type FileChangeStatus = 'modified' | 'added' | 'deleted';

export type DiffLineType = 'context' | 'added' | 'removed';

export type DiffLine = {
	oldLine: number | null;
	newLine: number | null;
	content: string;
	type: DiffLineType;
};

export type ChangeFile = {
	id: string;
	name: string;
	path: string;
	status: FileChangeStatus;
	additions: number;
	deletions: number;
	diff: DiffLine[];
};
