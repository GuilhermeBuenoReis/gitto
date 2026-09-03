import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import type { Branch } from '../-types/branch';

type BranchDetailsProps = {
	branch: Branch | null;
};

export function BranchDetails({ branch }: BranchDetailsProps) {
	if (!branch) {
		return (
			<div className='flex h-full items-center justify-center'>
				<span className='text-sm text-muted-foreground'>
					Selecione uma branch
				</span>
			</div>
		);
	}

	return (
		<div className='flex h-full flex-col p-6'>
			<div className='space-y-1'>
				<h2 className='text-xl font-inter font-bold text-foreground'>
					{branch.name}
				</h2>

				{branch.status === 'current' && (
					<span className='text-sm text-emerald-400 font-inter font-semibold'>
						Current branch
					</span>
				)}
			</div>

			<div className='mt-8 space-y-6 text-xs'>
				<div className='space-y-2'>
					<span className='text-sm font-inter font-semibold text-muted-foreground'>
						Upstream
					</span>

					<p className='font-inter font-medium text-foreground text-xs'>
						{branch.upstream ?? 'No upstream'}
					</p>
				</div>

				<div className='space-y-2'>
					<span className='text-sm font-inter font-semibold text-muted-foreground'>
						Last commit
					</span>

					<div className='flex items-center gap-2 font-inter text-xs'>
						<span>{branch.lastCommitHash}</span>
						<span>·</span>
						<span>{branch.lastUpdated}</span>
					</div>
				</div>

				<div className='space-y-2'>
					<span className='text-sm font-inter font-semibold text-muted-foreground'>
						Ahead / behind
					</span>

					<p className='font-inter text-foreground text-xs'>
						{branch.ahead} / {branch.behind}
					</p>
				</div>

				<div className='space-y-2'>
					<span className='text-sm font-inter font-semibold text-muted-foreground'>
						Worktree
					</span>

					<p className='break-all font-inter text-foreground text-xs'>
						{branch.worktreePath ?? 'No worktree'}
					</p>
				</div>
			</div>

			<div className='mt-auto space-y-2 pt-8'>
				{branch.ahead > 0 && (
					<Button
						type='button'
						className='w-full rounded-md font-inter font-semibold text-white px-6 py-4'
						variant='outline'
					>
						Push {branch.ahead} {branch.ahead === 1 ? 'commit' : 'commits'}
					</Button>
				)}

				<Button
					type='button'
					variant='outline'
					className='w-full rounded-md font-inter font-semibold text-white px-6 py-4'
				>
					Create worktree
				</Button>

				<Separator className='my-5' />

				<Button
					type='button'
					variant='secondary'
					className={cn(
						'w-full justify-center rounded-md',
						'font-inter font-bold text-xs text-foreground hover:text-foreground',
					)}
				>
					Rename branch...
				</Button>

				<Button
					type='button'
					variant='destructive'
					className={cn(
						'w-full justify-center rounded-md',
						'font-inter font-bold text-xs text-destructive-foreground px-6 py-4 hover:text-destructive',
					)}
				>
					Delete branch...
				</Button>
			</div>
		</div>
	);
}
