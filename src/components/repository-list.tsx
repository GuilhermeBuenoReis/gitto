import { ListVisibleRepository } from './list-visible-repository';
import { ShowMoreRepositoryDialog } from './show-more-repository-dialog';

export function RepositoryList() {
	return (
		<div className='space-y-2'>
			<span className='px-4 text-sm font-medium uppercase tracking-wide text-muted-foreground'>
				Repositories
			</span>

			<div className='pl-6'>
				<ListVisibleRepository />
			</div>

			<ShowMoreRepositoryDialog />
		</div>
	);
}
