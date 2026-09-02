import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Sidebar } from '../components/sidebar';
import { RepositoryProvider } from '../context/repository-context';

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
	return (
		<>
			<div className='flex h-dvh w-dvw flex-col antialiased leading-1.5'>
				<Sidebar />
			</div>
			<Outlet />
			<TanStackRouterDevtools />
		</>
	);
}
