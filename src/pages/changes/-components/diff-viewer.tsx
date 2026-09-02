import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { ChangeFile } from '../-types/change-file';
import { DiffLine } from './diff-line';

type DiffViewerProps = {
	file: ChangeFile | null;
};

export function DiffViewer({ file }: DiffViewerProps) {
	if (!file) {
		return (
			<div className='flex h-full items-center justify-center text-sm text-muted-foreground'>
				Selecione um arquivo para visualizar as alterações
			</div>
		);
	}

	return (
		<div className='flex h-full min-h-0 flex-col'>
			<div className='flex h-12 shrink-0 items-center justify-between border-b px-4'>
				<span className='truncate font-mono text-xs'>{file.path}</span>

				<div className='flex items-center gap-1'>
					<Button
						type='button'
						variant='ghost'
						size='sm'
						className='text-xs text-muted-foreground'
					>
						Split
					</Button>

					<Button
						type='button'
						variant='ghost'
						size='sm'
						className='text-xs text-muted-foreground'
					>
						Ignore whitespace
					</Button>

					<DropdownMenu>
						<DropdownMenuTrigger
							render={<Button type='button' variant='ghost' size='icon-sm' />}
						>
							<MoreHorizontal className='size-4' />
						</DropdownMenuTrigger>

						<DropdownMenuContent align='end'>
							<DropdownMenuCheckboxItem checked>
								Show line numbers
							</DropdownMenuCheckboxItem>

							<DropdownMenuCheckboxItem>Wrap lines</DropdownMenuCheckboxItem>

							<DropdownMenuSeparator />

							<DropdownMenuItem>Open file</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</div>

			<ScrollArea className='min-h-0 flex-1'>
				<div className='min-w-max py-2'>
					{file.diff.map((line, index) => (
						<DiffLine
							key={`${line.oldLine}-${line.newLine}-${index}`}
							line={line}
						/>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
