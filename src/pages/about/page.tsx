import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about/')({
	component: AboutPage,
});

function AboutPage() {
	return (
		<div className='p-4'>
			<h1 className='font-bold text-2xl'>About</h1>
			<p className='text-muted-foreground'>
				This route lives in src/pages/about/page.tsx.
			</p>
		</div>
	);
}
