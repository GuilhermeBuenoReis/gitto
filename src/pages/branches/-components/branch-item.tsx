import { GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { Branch } from '../-types/branch';

type BranchItemProps = {
	branch: Branch;
	active: boolean;
	onSelect: (branchId: string) => void;
};

const statusLabel = {
	current: 'current',
	worktree: 'worktree',
	merged: 'merged',
	stale: 'stale',
};

export function BranchItem({ branch, active, onSelect }: BranchItemProps) {
	return (
		<li>
			<Button
				type='button'
				variant='ghost'
				onClick={() => onSelect(branch.id)}
				className={cn(
					'grid h-12 w-full grid-cols-[20px_minmax(0,1fr)_90px_70px_40px] items-center gap-3 rounded-md px-3 text-left font-medium font-inter',
					active && 'bg-accent',
				)}
			>
				<div className='flex justify-center'>
					{branch.status === 'current' ? (
						<span className='size-2 rounded-full bg-emerald-400' />
					) : (
						<GitBranch className='size-4 text-muted-foreground' />
					)}
				</div>

				<span
					className={cn(
						'truncate text-sm font-medium',
						active ? 'text-foreground' : 'text-muted-foreground',
					)}
				>
					{branch.name}
				</span>

				<span className='text-sm text-muted-foreground'>
					{statusLabel[branch.status]}
				</span>

				<div className='flex items-center gap-2 font-inter text-xs'>
					{branch.ahead > 0 && (
						<span className='text-muted-foreground'>↑ {branch.ahead}</span>
					)}

					{branch.behind > 0 && (
						<span className='text-yellow-400'>↓ {branch.behind}</span>
					)}

					{branch.health === 'clean' && (
						<span className='text-emerald-400 text-inter text-xs'>clean</span>
					)}
				</div>

				<span className='text-right font-inter text-xs text-muted-foreground'>
					{branch.lastUpdated}
				</span>
			</Button>
		</li>
	);
}
