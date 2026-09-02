import { Circle } from 'lucide-react';
import { useEnvironmentStatus } from '@/hooks/use-environment-status';
import { ConnnectionStatusSkeleton } from './skeletons/connection-status-skeleton';

export function ConnectionStatus() {
	const { environment, isLoading } = useEnvironmentStatus();

	if (isLoading) {
		<ConnnectionStatusSkeleton />;
	}

	if (!environment?.wslAvailable) {
		return (
			<div className='space-y-3 px-4 pb-2'>
				<div className='flex items-center gap-2'>
					<Circle className='size-2 fill-muted-foreground text-muted-foreground' />

					<span className='text-xs font-medium uppercase text-muted-foreground'>
						WSL unavailable
					</span>
				</div>
			</div>
		);
	}

	const sshStatus =
		environment.sshAvailable === true
			? 'ready'
			: environment.sshAvailable === false
				? 'unavailable'
				: 'idle';

	return (
		<div className='space-y-4 px-4 pb-2'>
			<div className='flex items-center gap-2'>
				<Circle
					className={
						environment.running
							? 'size-2 fill-emerald-500 text-emerald-500'
							: 'size-2 fill-muted-foreground text-muted-foreground'
					}
				/>

				<span
					className={
						environment.running
							? 'text-xs font-medium uppercase text-emerald-500'
							: 'text-xs font-medium uppercase text-muted-foreground'
					}
				>
					{environment.distro} / WSL {environment.wslVersion}
				</span>
			</div>

			<div className='flex items-center gap-4 text-xs'>
				<span className='text-muted-foreground'>SSH</span>

				<span
					className={
						environment.sshAvailable
							? 'text-foreground'
							: 'text-muted-foreground'
					}
				>
					{sshStatus}
				</span>
			</div>
		</div>
	);
}
