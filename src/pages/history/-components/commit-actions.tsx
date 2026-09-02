import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type CommitActionsProps = {
	hash: string;
};

export function CommitActions({ hash }: CommitActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				render={
					<Button
						className='font-inter font-semibold px-6 py-4 text-xs rounded-md'
						variant='outline'
					>
						Quick Actions
					</Button>
				}
			/>

			<DropdownMenuContent>
				<DropdownMenuItem>Browse files at this commit</DropdownMenuItem>
				<DropdownMenuItem>Create branch from {hash}</DropdownMenuItem>
				<DropdownMenuItem className='text-destructive'>
					Revert commit...
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
