import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Branch } from '../-types/branch';
import { BranchItem } from './branch-item';

type BranchListProps = {
	branches: Branch[];
	activeBranchId: string | null;
	onSelectBranch: (branchId: string) => void;
};

export function BranchList({
	branches,
	activeBranchId,
	onSelectBranch,
}: BranchListProps) {
	return (
		<div className='flex h-full min-h-0 flex-col'>
			<div className='flex h-16 shrink-0 items-center justify-between border-b px-4'>
				<span className='text-xs font-semibold uppercase text-muted-foreground'>
					Local branches
				</span>

				<Button
					type='button'
					variant='outline'
					size='sm'
					className='text-xs font-inter font-bold px-6 py-4'
				>
					New branch
				</Button>
			</div>

			<ScrollArea className='min-h-0 flex-1'>
				<ul className='space-y-1 p-2 font-inter text-sm text-foreground'>
					{branches.map((branch) => (
						<BranchItem
							key={branch.id}
							branch={branch}
							active={activeBranchId === branch.id}
							onSelect={onSelectBranch}
						/>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
}
