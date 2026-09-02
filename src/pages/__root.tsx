import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
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

				<div className='flex min-w-0 flex-1 flex-col overflow-hidden p-6'>
					<Outlet />
				</div>
			</div>

			<TanStackRouterDevtools />
		</RepositoryProvider>
	);
}
