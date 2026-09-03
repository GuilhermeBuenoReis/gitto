export type ChangedFileStatus = 'modified' | 'added' | 'deleted';

export interface ChangedFile {
	id: string;
	name: string;
	path: string;
	status: ChangedFileStatus;
}

export interface Commit {
	id: string;
	hash: string;
	title: string;
	author: string;
	date: string;
	filesChanged: number;
	additions: number;
	deletions: number;
	branch: string;
	remoteBranch: string;
	files: ChangedFile[];
}
