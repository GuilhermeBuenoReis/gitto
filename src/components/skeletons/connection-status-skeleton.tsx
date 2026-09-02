import { Skeleton } from '../ui/skeleton';

export function ConnnectionStatusSkeleton() {
	return (
		<div className='space-y-4 px-4 pb-2'>
			<Skeleton className='h-4 w-28' />
			<Skeleton className='h-4 w-20' />
		</div>
	);
}
