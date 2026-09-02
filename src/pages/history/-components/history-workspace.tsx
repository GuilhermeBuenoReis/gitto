import { useMemo, useState } from 'react';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { commits } from '../-data/commits';
import { CommitDetails } from './commit-details';
import { CommitList } from './commit-list';

export function HistoryWorkspace() {
	const [activeCommitId, setActiveCommitId] = useState<string | null>(
		commits[0]?.id ?? null,
	);

	const activeCommit = useMemo(
		() => commits.find((commit) => commit.id === activeCommitId) ?? null,
		[activeCommitId],
	);

	return (
		<ResizablePanelGroup
			orientation='horizontal'
			className='h-full min-h-0 w-full'
		>
			<ResizablePanel defaultSize='36%' minSize='25%' maxSize='50%'>
				<CommitList
					commits={commits}
					activeCommitId={activeCommitId}
					onSelectCommit={setActiveCommitId}
				/>
			</ResizablePanel>

			<ResizableHandle />

			<ResizablePanel defaultSize='64%'>
				<CommitDetails commit={activeCommit} />
			</ResizablePanel>
		</ResizablePanelGroup>
	);
}
