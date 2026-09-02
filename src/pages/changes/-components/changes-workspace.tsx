import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from '@/components/ui/resizable';
import { changeFiles } from '../-data/change-files';
import { ChangeFileList } from './change-file-list';
import { CommitPanel } from './commit-panel';
import { DiffViewer } from './diff-viewer';

export const changesFormSchema = z.object({
	selectedFileIds: z
		.array(z.string())
		.min(1, 'Selecione pelo menos um arquivo'),

	commitMessage: z.string().trim().min(1, 'Informe uma mensagem para o commit'),
});

export type ChangesFormData = z.infer<typeof changesFormSchema>;

export function ChangesWorkspace() {
	const [activeFileId, setActiveFileId] = useState<string | null>(
		changeFiles[0]?.id ?? null,
	);

	const { ...form } = useForm<ChangesFormData>({
		resolver: zodResolver(changesFormSchema),
		defaultValues: {
			selectedFileIds: changeFiles.map((file) => file.id),
			commitMessage: '',
		},
	});

	const activeFile = useMemo(
		() => changeFiles.find((file) => file.id === activeFileId) ?? null,
		[activeFileId],
	);

	function handleCommit(data: ChangesFormData) {
		console.log(data);
	}

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(handleCommit)} className='h-full'>
				<ResizablePanelGroup
					orientation='horizontal'
					className='h-full min-h-0 w-full'
				>
					<ResizablePanel defaultSize='36%' minSize='25%' maxSize='50%'>
						<div className='flex h-full min-h-0 flex-col'>
							<ChangeFileList
								files={changeFiles}
								activeFileId={activeFileId}
								onSelectFile={setActiveFileId}
							/>

							<CommitPanel />
						</div>
					</ResizablePanel>

					<ResizableHandle />

					<ResizablePanel defaultSize='64%'>
						<DiffViewer file={activeFile} />
					</ResizablePanel>
				</ResizablePanelGroup>
			</form>
		</FormProvider>
	);
}
