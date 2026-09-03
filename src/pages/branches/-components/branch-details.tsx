import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
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
				<h2 className='text-lg font-medium text-foreground'>{branch.name}</h2>

				{branch.status === 'current' && (
					<span className='text-xs text-emerald-400'>Current branch</span>
				)}
			</div>

			<div className='mt-8 space-y-6 text-xs'>
				<div className='space-y-2'>
					<span className='text-muted-foreground'>Upstream</span>

					<p className='font-mono text-foreground'>
						{branch.upstream ?? 'No upstream'}
					</p>
				</div>

				<div className='space-y-2'>
					<span className='text-muted-foreground'>Last commit</span>

					<div className='flex items-center gap-2 font-mono'>
						<span>{branch.lastCommitHash}</span>
						<span>·</span>
						<span>{branch.lastUpdated}</span>
					</div>
				</div>

				<div className='space-y-2'>
					<span className='text-muted-foreground'>Ahead / behind</span>

					<p className='font-mono text-foreground'>
						{branch.ahead} / {branch.behind}
					</p>
				</div>

				<div className='space-y-2'>
					<span className='text-muted-foreground'>Worktree</span>

					<p className='break-all font-mono text-foreground'>
						{branch.worktreePath ?? 'No worktree'}
					</p>
				</div>
			</div>

			<div className='mt-auto space-y-2 pt-8'>
				{branch.ahead > 0 && (
					<Button type='button' className='w-full'>
						Push {branch.ahead} {branch.ahead === 1 ? 'commit' : 'commits'}
					</Button>
				)}

				<Button type='button' variant='outline' className='w-full'>
					Create worktree
				</Button>

				<Separator className='my-5' />

				<Button
					type='button'
					variant='ghost'
					className='w-full justify-start text-xs text-muted-foreground'
				>
					Rename branch...
				</Button>

				<Button
					type='button'
					variant='ghost'
					className='w-full justify-start text-xs text-destructive hover:text-destructive'
				>
					Delete branch...
				</Button>
			</div>
		</div>
	);
}
