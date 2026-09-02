import { cn } from '@/lib/utils';
import type { DiffLine as DiffLineType } from '../-types/change-file';

type DiffLineProps = {
	line: DiffLineType;
};

export function DiffLine({ line }: DiffLineProps) {
	const prefix =
		line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';

	return (
		<div
			className={cn(
				'grid min-h-8 grid-cols-[48px_48px_1fr] font-mono text-xs',
				line.type === 'added' && 'bg-emerald-500/10 text-emerald-300',
				line.type === 'removed' && 'bg-red-500/10 text-red-300',
				line.type === 'context' && 'text-muted-foreground',
			)}
		>
			<span className='flex items-center justify-end border-r px-2 text-muted-foreground/60'>
				{line.oldLine}
			</span>

			<span className='flex items-center justify-end border-r px-2 text-muted-foreground/60'>
				{line.newLine}
			</span>

			<pre className='flex min-w-max items-center whitespace-pre px-4'>
				<span className='mr-2 select-none'>{prefix}</span>

				{line.content}
			</pre>
		</div>
	);
}
