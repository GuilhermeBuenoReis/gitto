import { Button } from '../components/ui/button';
import { useRepositories } from '../context/repository-context';

export function ListVisibleRepository() {
	const { visibleRepositories, activeRepositoryId, setActiveRepositoryId } =
		useRepositories();

	return (
		<ul className='space-y-1'>
			{visibleRepositories.map((repository) => {
				const isActive = activeRepositoryId === repository.id;

				return (
					<li key={repository.id}>
						<Button
							type='button'
							variant='ghost'
							onClick={() => setActiveRepositoryId(repository.id)}
							className='w-full justify-start gap-2'
						>
							<span
								className={`size-2 rounded-full ${
									isActive ? 'bg-foreground' : 'bg-transparent'
								}`}
							/>

							<span
								className={
									isActive ? 'text-foreground' : 'text-muted-foreground'
								}
							>
								{repository.name}
							</span>
						</Button>
					</li>
				);
			})}
		</ul>
	);
}
