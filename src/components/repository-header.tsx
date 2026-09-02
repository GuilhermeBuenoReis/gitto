import { ChevronDown, RefreshCw } from 'lucide-react';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from './ui/breadcrumb';
import { Button } from './ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu';

const branches = [
	{ id: '1', name: 'main' },
	{ id: '2', name: 'develop' },
	{ id: '3', name: 'feat/auth-flow' },
];

export function RepositoryHeader() {
	return (
		<div className='flex items-center justify-between gap-4 p-6'>
			<Breadcrumb>
				<BreadcrumbList className='text-md'>
					<BreadcrumbItem>
						<BreadcrumbPage className='font-medium text-foreground'>
							anvero-api
						</BreadcrumbPage>
					</BreadcrumbItem>

					<BreadcrumbSeparator>
						<span>·</span>
					</BreadcrumbSeparator>

					<BreadcrumbItem>
						<BreadcrumbPage className='font-mono text-muted-foreground'>
							~/repositories/anvero-api
						</BreadcrumbPage>
					</BreadcrumbItem>

					<BreadcrumbSeparator>
						<span>·</span>
					</BreadcrumbSeparator>

					<BreadcrumbItem>
						<BreadcrumbPage className='text-muted-foreground'>
							Ubuntu
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className='flex shrink-0 items-center gap-2'>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<Button
								type='button'
								variant='ghost'
								size='default'
								className='gap-1 text-md text-muted-foreground'
							/>
						}
					>
						main
						<ChevronDown className='size-3' />
					</DropdownMenuTrigger>

					<DropdownMenuContent align='end'>
						{branches.map((branch) => (
							<DropdownMenuItem key={branch.id}>{branch.name}</DropdownMenuItem>
						))}
					</DropdownMenuContent>
				</DropdownMenu>

				<Button
					type='button'
					variant='ghost'
					size='default'
					className='gap-2 text-md'
				>
					<RefreshCw className='size-3.5' />
					Sync
				</Button>
			</div>
		</div>
	);
}
