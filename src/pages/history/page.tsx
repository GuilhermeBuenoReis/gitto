import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';
import { HistoryWorkspace } from './-components/history-workspace';

export const Route = createFileRoute('/history/')({
	component: HistoryPage,
});

function HistoryPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='History' />

			<main className='min-h-0 flex-1'>
				<HistoryWorkspace />
			</main>
		</div>
	);
}
