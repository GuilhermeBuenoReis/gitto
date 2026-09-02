import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';

export const Route = createFileRoute('/pull-request/')({
	component: PullRequestPage,
});

function PullRequestPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='Pull Requests' />

			<main className='min-h-0 flex-1 overflow-auto p-6'>Pull Requests</main>
		</div>
	);
}
