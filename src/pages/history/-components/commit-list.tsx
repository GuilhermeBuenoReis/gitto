import { ScrollArea } from '@/components/ui/scroll-area';
import type { Commit } from '../-types/commit';
import { CommitItem } from './commit-item';

type CommitListProps = {
	commits: Commit[];
	activeCommitId: string | null;
	onSelectCommit: (commitId: string) => void;
};

export function CommitList({
	commits,
	activeCommitId,
	onSelectCommit,
}: CommitListProps) {
	return (
		<div className='flex h-full min-h-0 flex-col'>
			<div className='flex h-10 shrink-0 items-center border-b px-3'>
				<span className='text-xs font-bold uppercase text-muted-foreground'>
					Commits
				</span>
			</div>

			<ScrollArea className='min-h-0 flex-1'>
				<ul className='space-y-1 p-2'>
					{commits.map((commit) => (
						<CommitItem
							key={commit.id}
							commit={commit}
							active={activeCommitId === commit.id}
							onSelect={onSelectCommit}
						/>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
}
