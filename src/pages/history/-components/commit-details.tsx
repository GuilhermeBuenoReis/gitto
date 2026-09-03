import { ArrowRight, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Commit } from '../-types/commit';
import { ChangedFileItem } from './changed-file-item';
import { CommitActions } from './commit-actions';

type CommitDetailsProps = {
	commit: Commit | null;
};

export function CommitDetails({ commit }: CommitDetailsProps) {
	if (!commit) {
		return (
			<div className='flex h-full items-center justify-center'>
				<span className='text-sm text-muted-foreground'>
					Selecione um commit
				</span>
			</div>
		);
	}

	return (
		<ScrollArea className='h-full'>
			<div className='flex min-h-full flex-col gap-6 p-6 text-foreground font-inter font-medium'>
				<div className='space-y-3'>
					<div className='w-full flex items-center gap-2 justify-between'>
						<h2 className='text-xl font-bold'>{commit.title}</h2>

						<CommitActions hash={commit.hash} />
					</div>

					<div className='w-full flex justify-between items-center'>
						<div className='flex items-center gap-2 text-xs font-semibold text-muted-foreground'>
							<span>{commit.author}</span>
							<Minus size={10} />
							<span>{commit.date}</span>
						</div>

						<span className='font-mono text-xs text-primary font-semibold'>
							{commit.hash}
						</span>
					</div>
				</div>

				<Card className='gap-0 py-0'>
					<CardContent className='flex items-center justify-between p-4 font-inter font-semibold'>
						<div className='space-y-2'>
							<span className='text-xs'>
								{commit.filesChanged}{' '}
								{commit.filesChanged === 1 ? 'file changed' : 'files changed'}
							</span>

							<div className='flex items-center gap-2 font-inter text-xs text-muted-foreground'>
								<span>{commit.branch}</span>
								<ArrowRight size={12} />
								<span>{commit.remoteBranch}</span>
							</div>
						</div>

						<div className='flex items-center gap-8 font-mono text-xs'>
							<span className='text-emerald-400'>+{commit.additions}</span>

							<span className='text-red-400'>-{commit.deletions}</span>
						</div>
					</CardContent>
				</Card>

				<div className='space-y-2 font-inter font-semibold'>
					<span className='text-xs text-muted-foreground'>Changed files</span>

					<ul className='space-y-1'>
						{commit.files.map((file) => (
							<ChangedFileItem key={file.id} file={file} />
						))}
					</ul>
				</div>
			</div>
		</ScrollArea>
	);
}
