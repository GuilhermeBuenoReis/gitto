import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { RepositoryHeader } from '../components/repository-header';
import { Sidebar } from '../components/sidebar';
import { RepositoryProvider } from '../context/repository-context';

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<RepositoryProvider>
			<div className='flex h-dvh w-dvw overflow-hidden antialiased leading-1.5'>
				<Sidebar />

				<div className='flex min-w-0 flex-1 flex-col'>
					<RepositoryHeader />

					<main className='min-h-0 flex-1 overflow-auto'>
						<Outlet />
					</main>
				</div>
			</div>

			<TanStackRouterDevtools />
		</RepositoryProvider>
	);
}
