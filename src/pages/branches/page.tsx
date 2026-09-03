import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';
import { BranchesWorkspace } from './-components/branches-workspace';

export const Route = createFileRoute('/branches/')({
	component: BranchesPage,
});

function BranchesPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='Branches' />

			<main className='min-h-0 flex-1'>
				<BranchesWorkspace />
			</main>
		</div>
	);
}
