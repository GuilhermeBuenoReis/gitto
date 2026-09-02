import { useController, useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import type { ChangeFile } from '../-types/change-file';
import type { ChangesFormData } from './changes-workspace';

interface ChangeFileItemProps {
	file: ChangeFile;
	active: boolean;
	onSelect: (fileId: string) => void;
}

const statusLabel = {
	modified: 'M',
	added: 'A',
	deleted: 'D',
};

const statusClassName = {
	modified: 'text-violet-400',
	added: 'text-emerald-400',
	deleted: 'text-red-400',
};

export function ChangeFileItem({
	file,
	active,
	onSelect,
}: ChangeFileItemProps) {
	const { control } = useFormContext<ChangesFormData>();

	const {
		field,
		fieldState: { error },
	} = useController({
		name: 'selectedFileIds',
		control,
	});

	const selectedFileIds = field.value ?? [];

	const checked = selectedFileIds.includes(file.id);

	function handleCheckedChange(checked: boolean) {
		if (checked) {
			field.onChange([
				...selectedFileIds.filter((fileId) => fileId !== file.id),
				file.id,
			]);

			return;
		}

		field.onChange(selectedFileIds.filter((fileId) => fileId !== file.id));
	}

	return (
		<li>
			<div
				className={cn(
					'flex h-10 items-center gap-3 rounded-md px-2 transition-colors',
					active && 'bg-accent',
				)}
			>
				<Checkbox
					checked={checked}
					onCheckedChange={(value) => handleCheckedChange(value === true)}
					aria-invalid={Boolean(error)}
				/>

				<span
					className={cn(
						'w-3 text-center font-mono text-xs',
						statusClassName[file.status],
					)}
				>
					{statusLabel[file.status]}
				</span>

				<Button
					type='button'
					variant='ghost'
					onClick={() => onSelect(file.id)}
					className='h-full min-w-0 flex-1 justify-start rounded-none px-0 font-mono text-xs hover:bg-transparent'
				>
					<span className='truncate'>{file.name}</span>
				</Button>

				<div className='flex shrink-0 items-center gap-1 font-mono text-xs'>
					{file.additions > 0 && (
						<span className='text-emerald-400'>+{file.additions}</span>
					)}

					{file.deletions > 0 && (
						<span className='text-red-400'>-{file.deletions}</span>
					)}
				</div>
			</div>
		</li>
	);
}
