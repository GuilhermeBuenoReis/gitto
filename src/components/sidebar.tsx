import { RepositoryProvider } from '../context/repository-context';
import { ConnectionStatus } from './connection-status';
import { GittoLogo } from './gitto-logo';
import { RepositoryList } from './repository-list';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from './ui/resizable';
import { Separator } from './ui/separator';
import { WorktreeList } from './worktree-list';

export function Sidebar() {
	return (
		<ResizablePanelGroup
			orientation='horizontal'
			className='h-screen min-h-50 max-w-xs border-r'
		>
			<ResizablePanel defaultSize='25%'>
				<div className='flex h-full min-w-50 flex-col p-8'>
					<div className='flex items-center gap-3'>
						<GittoLogo className='size-10' />

						<h1 className='text-2xl font-bold'>Gitto</h1>
					</div>

					<Separator className='my-6' />

					<RepositoryProvider>
						<div className='flex min-h-0 flex-1 flex-col'>
							<div className='space-y-8'>
								<RepositoryList />

								<WorktreeList />
							</div>

							<div className='mt-auto pt-8'>
								<ConnectionStatus />
							</div>
						</div>
					</RepositoryProvider>
				</div>
			</ResizablePanel>

			<ResizableHandle withHandle />
		</ResizablePanelGroup>
	);
}
