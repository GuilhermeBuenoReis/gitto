import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';
import { ChangesWorkspace } from './-components/changes-workspace';

export const Route = createFileRoute('/changes/')({
	component: ChangesPage,
});

function ChangesPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='Changes' />

			<main className='min-h-0 flex-1'>
				<ChangesWorkspace />
			</main>
		</div>
	);
}
