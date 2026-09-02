import { GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const worktrees = [
	{
		id: '1',
		name: 'main',
	},
	{
		id: '2',
		name: 'feat/auth-flow',
	},
];

export function WorktreeList() {
	return (
		<div className='space-y-3'>
			<span className='px-4 text-sm font-medium uppercase tracking-wide text-muted-foreground'>
				Worktrees
			</span>

			<ul className='space-y-1 pl-4'>
				{worktrees.map((worktree) => (
					<li key={worktree.id}>
						<Button
							type='button'
							variant='ghost'
							className='w-full justify-start gap-2 text-muted-foreground'
						>
							<GitBranch className='size-3.5' />

							<span className='truncate'>{worktree.name}</span>
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}
