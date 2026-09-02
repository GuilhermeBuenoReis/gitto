import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

type RepositoryNavigationProps = {
	value: string;
	onValueChange: (value: string) => void;
};

export function RepositoryNavigation({
	value,
	onValueChange,
}: RepositoryNavigationProps) {
	return (
		<Tabs value={value} onValueChange={onValueChange} className='w-full'>
			<TabsList
				variant='line'
				className='h-11 w-full justify-start gap-8 rounded-none bg-transparent p-0'
			>
				<TabsTrigger value='changes' className='h-11 rounded-none px-2 text-xs'>
					Changes
				</TabsTrigger>

				<TabsTrigger value='history' className='h-11 rounded-none px-2 text-xs'>
					History
				</TabsTrigger>

				<TabsTrigger
					value='branches'
					className='h-11 rounded-none px-2 text-xs'
				>
					Branches
				</TabsTrigger>

				<TabsTrigger
					value='worktrees'
					className='h-11 rounded-none px-2 text-xs'
				>
					Worktrees
				</TabsTrigger>

				<TabsTrigger
					value='pull-requests'
					className='h-11 rounded-none px-2 text-xs'
				>
					Pull Requests
				</TabsTrigger>
			</TabsList>
		</Tabs>
	);
}
