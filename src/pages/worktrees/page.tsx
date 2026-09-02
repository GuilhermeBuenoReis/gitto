import { createFileRoute } from '@tanstack/react-router';
import { RepositoryHeader } from '@/components/repository-header';

export const Route = createFileRoute('/worktrees/')({
	component: WorktreesPage,
});

function WorktreesPage() {
	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<RepositoryHeader title='Worktrees' />

			<main className='min-h-0 flex-1 overflow-auto p-6'>Worktrees</main>
		</div>
	);
}
