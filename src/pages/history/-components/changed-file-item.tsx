import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type { ChangedFile } from '../-types/commit';

type ChangedFileItemProps = {
	file: ChangedFile;
};

const statusLabel = {
	modified: 'M',
	added: 'A',
	deleted: 'D',
};

const statusClassName = {
	modified: 'text-muted-foreground',
	added: 'text-emerald-400',
	deleted: 'text-red-400',
};

export function ChangedFileItem({ file }: ChangedFileItemProps) {
	return (
		<li>
			<Button
				type='button'
				variant='ghost'
				className='h-8 mt-2 w-full justify-start gap-3 p-3 font-inter font-medium text-xs hover:bg-transparent'
			>
				<span className={cn('w-3 text-center', statusClassName[file.status])}>
					{statusLabel[file.status]}
				</span>

				<span className='truncate text-muted-foreground'>{file.name}</span>
			</Button>
		</li>
	);
}
