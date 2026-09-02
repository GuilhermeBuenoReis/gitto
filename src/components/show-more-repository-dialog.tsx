import { useState } from 'react';
import { Button } from '../components/ui/button';
import { useRepositories } from '../context/repository-context';
import { SearchRepository } from './search-repository';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';

export function ShowMoreRepositoryDialog() {
	const [open, setOpen] = useState(false);

	const {
		repositories,
		filteredRepositories,
		activeRepositoryId,
		setActiveRepositoryId,
		clearRepositorySearch,
	} = useRepositories();

	function handleOpenChange(isOpen: boolean) {
		setOpen(isOpen);

		if (!isOpen) {
			clearRepositorySearch();
		}
	}

	return (
		<>
			{repositories.length > 10 && (
				<Dialog open={open} onOpenChange={handleOpenChange}>
					<DialogTrigger
						render={
							<Button
								type='button'
								variant='ghost'
								size='default'
								className='w-full justify-between text-muted-foreground'
							/>
						}
					>
						<span>Mostrar mais</span>

						<span className='text-xs'>+{repositories.length - 10}</span>
					</DialogTrigger>

					<DialogContent className='w-124 max-w-[90vw] p-4 sm:p-6'>
						<DialogHeader>
							<DialogTitle>
								Aqui está a lista de todos os seus repositórios
							</DialogTitle>
						</DialogHeader>

						<SearchRepository />

						<ScrollArea className='h-80 w-full rounded-md border'>
							{Array.isArray(filteredRepositories) ? (
								<ul className='space-y-1 p-2'>
									{filteredRepositories.map((repository) => {
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
														className={`size-2 shrink-0 rounded-full ${
															isActive ? 'bg-foreground' : 'bg-transparent'
														}`}
													/>

													<span
														className={
															isActive
																? 'truncate text-foreground'
																: 'truncate text-muted-foreground'
														}
													>
														{repository.name}
													</span>
												</Button>
											</li>
										);
									})}
								</ul>
							) : (
								filteredRepositories
							)}
						</ScrollArea>
					</DialogContent>
				</Dialog>
			)}
		</>
	);
}
