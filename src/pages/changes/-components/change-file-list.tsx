import { useController, useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { ChangeFile } from '../-types/change-file';
import { ChangeFileItem } from './change-file-item';
import type { ChangesFormData } from './changes-workspace';

interface ChangeFileListProps {
	files: ChangeFile[];
	activeFileId: string | null;
	onSelectFile: (fileId: string) => void;
}

export function ChangeFileList({
	files,
	activeFileId,
	onSelectFile,
}: ChangeFileListProps) {
	const { control } = useFormContext<ChangesFormData>();

	const { field } = useController({
		name: 'selectedFileIds',
		control,
	});

	const selectedFileIds = field.value ?? [];

	const allSelected =
		files.length > 0 &&
		files.every((file) => selectedFileIds.includes(file.id));

	function handleStageAll(checked: boolean) {
		field.onChange(checked ? files.map((file) => file.id) : []);
	}

	return (
		<div className='flex min-h-0 flex-1 flex-col'>
			<div className='flex h-12 shrink-0 items-center justify-between border-b px-3'>
				<div className='flex items-center gap-2'>
					<Checkbox
						checked={allSelected}
						onCheckedChange={(value) => handleStageAll(value === true)}
					/>

					<span className='text-xs font-medium'>
						{files.length} changed files
					</span>
				</div>

				<Button
					type='button'
					variant='ghost'
					size='sm'
					onClick={() => handleStageAll(true)}
					className='text-xs text-muted-foreground'
				>
					Stage all
				</Button>
			</div>

			<ScrollArea className='min-h-0 flex-1'>
				<ul className='space-y-1 p-2'>
					{files.map((file) => (
						<ChangeFileItem
							key={file.id}
							file={file}
							active={activeFileId === file.id}
							onSelect={onSelectFile}
						/>
					))}
				</ul>
			</ScrollArea>
		</div>
	);
}
