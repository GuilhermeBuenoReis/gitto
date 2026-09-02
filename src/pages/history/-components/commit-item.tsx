import { Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Commit } from '../-types/commit';

type CommitItemProps = {
	commit: Commit;
	active: boolean;
	onSelect: (commitId: string) => void;
};

export function CommitItem({ commit, active, onSelect }: CommitItemProps) {
	return (
		<li>
			<Button
				type='button'
				variant='ghost'
				onClick={() => onSelect(commit.id)}
				className={cn(
					'h-auto w-full justify-start rounded-md px-3 py-2.5 text-left',
					'hover:bg-accent/50',
					active && 'bg-accent hover:bg-accent',
				)}
			>
				<div className='flex min-w-0 items-start gap-3'>
					<span
						className={cn(
							'mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/30',
							active && 'bg-foreground',
						)}
					/>

					<div className='min-w-0 space-y-1'>
						<p
							className={cn(
								'truncate font-inter text-sm font-semibold text-muted-foreground',
								active && 'text-foreground',
							)}
						>
							{commit.title}
						</p>

						<div className='flex items-center gap-2 font-inter text-xs text-muted-foreground'>
							<span className='font-mono'>{commit.hash}</span>
							<Minus size={10} />
							<span>{commit.author}</span>
							<Minus size={10} />
							<span>{commit.date}</span>
						</div>
					</div>
				</div>
			</Button>
		</li>
	);
}
