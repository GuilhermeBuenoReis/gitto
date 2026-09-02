export function ConnectionStatus() {
	return (
		<div className='space-y-4 px-4 pb-6'>
			<div className='flex items-center gap-2'>
				<span className='text-xs font-medium uppercase text-green-500'>
					Ubuntu / WSL 2
				</span>
			</div>

			<div className='flex items-center gap-3 text-xs text-muted-foreground'>
				<span className='uppercase'>SSH</span>

				<span>connected</span>
			</div>
		</div>
	);
}
