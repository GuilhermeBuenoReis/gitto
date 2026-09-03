import { useMemo, useState } from 'react';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { branches } from '../-data/branches';
import { BranchDetails } from './branch-details';
import { BranchList } from './branch-list';

export function BranchesWorkspace() {
	const [activeBranchId, setActiveBranchId] = useState<string | null>(
		branches[0]?.id ?? null,
	);

	const activeBranch = useMemo(
		() => branches.find((branch) => branch.id === activeBranchId) ?? null,
		[activeBranchId],
	);

	return (
		<ResizablePanelGroup
			orientation='horizontal'
			className='h-full min-h-0 w-full'
		>
			<ResizablePanel defaultSize='68%' minSize='50%' maxSize='80%'>
				<BranchList
					branches={branches}
					activeBranchId={activeBranchId}
					onSelectBranch={setActiveBranchId}
				/>
			</ResizablePanel>

			<ResizableHandle />

			<ResizablePanel defaultSize='32%'>
				<BranchDetails branch={activeBranch} />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
