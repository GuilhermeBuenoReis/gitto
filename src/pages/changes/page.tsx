import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';

export const Route = createFileRoute('/changes/')({
	component: ChangesPage,
});

function ChangesPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='Changes' />

			<main className='min-h-0 flex-1 overflow-auto p-6'>Changes</main>
		</div>
	);
}
