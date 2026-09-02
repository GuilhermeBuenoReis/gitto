import { useController, useFormContext } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import type { ChangesFormData } from './changes-workspace';

export function CommitPanel() {
	const {
		control,
		formState: { isSubmitting },
	} = useFormContext<ChangesFormData>();

	const {
		field: commitMessage,
		fieldState: { error },
	} = useController({
		name: 'commitMessage',
		control,
	});

	const { field: selectedFileIds } = useController({
		name: 'selectedFileIds',
		control,
	});

	const selectedFilesCount = selectedFileIds.value?.length ?? 0;

	return (
		<div className='shrink-0 border-t p-3'>
			<div className='rounded-lg border bg-card'>
				<div className='p-3'>
					<span className='text-xs text-muted-foreground'>Commit message</span>

					<Textarea
						name={commitMessage.name}
						ref={commitMessage.ref}
						value={commitMessage.value}
						onChange={commitMessage.onChange}
						onBlur={commitMessage.onBlur}
						aria-invalid={Boolean(error)}
						placeholder='Describe your changes'
						className='mt-2 min-h-20 resize-none'
					/>

					{error && (
						<p className='mt-2 text-xs text-destructive'>{error.message}</p>
					)}
				</div>

				<div className='border-t p-2'>
					<Button
						type='submit'
						disabled={isSubmitting || selectedFilesCount === 0}
						className='w-full'
					>
						Commit {selectedFilesCount}{' '}
						{selectedFilesCount === 1 ? 'file' : 'files'}
					</Button>
				</div>
			</div>
		</div>
	);
}
