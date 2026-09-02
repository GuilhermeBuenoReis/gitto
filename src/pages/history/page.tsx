import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';

export const Route = createFileRoute('/history/')({
	component: HistoryPage,
});

function HistoryPage() {
	return (
		<>
			<RepositoryHeader title='History' />

			<main className='p-6'>History</main>
		</>
	);
}
