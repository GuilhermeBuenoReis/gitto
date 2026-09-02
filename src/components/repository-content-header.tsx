import { useLocation, useNavigate } from '@tanstack/react-router';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';

const repositoryTabs = [
	{
		value: 'changes',
		label: 'Changes',
		to: '/changes',
	},
	{
		value: 'history',
		label: 'History',
		to: '/history',
	},
	{
		value: 'branches',
		label: 'Branches',
		to: '/branches',
	},
	{
		value: 'worktrees',
		label: 'Worktrees',
		to: '/worktrees',
	},
	{
		value: 'pull-request',
		label: 'Pull Requests',
		to: '/pull-request',
	},
] as const;

type RepositoryTab = (typeof repositoryTabs)[number]['value'];

type RepositoryContentHeaderProps = {
	title: string;
};

function getActiveTab(pathname: string): RepositoryTab {
	if (pathname.startsWith('/changes')) {
		return 'changes';
	}

	if (pathname.startsWith('/history')) {
		return 'history';
	}

	if (pathname.startsWith('/branches')) {
		return 'branches';
	}

	if (pathname.startsWith('/worktrees')) {
		return 'worktrees';
	}

	if (pathname.startsWith('/pull-request')) {
		return 'pull-request';
	}

	return 'history';
}

export function RepositoryContentHeader({
	title,
}: RepositoryContentHeaderProps) {
	const location = useLocation();
	const navigate = useNavigate();

	const activeTab = getActiveTab(location.pathname);

	function handleTabChange(value: string) {
		const tab = repositoryTabs.find((tab) => tab.value === value);

		if (!tab) {
			return;
		}

		navigate({
			to: tab.to,
		});
	}

	return (
		<div className='grid min-h-24 grid-cols-[260px_minmax(0,1fr)] border-b px-6 w-full items-center gap-6 justify-between'>
			<div className='flex flex-col justify-center gap-2'>
				<h1 className='text-xl font-medium text-foreground'>{title}</h1>

				<div className='flex items-center gap-3 font-mono text-xs text-muted-foreground'>
					<span>anvero-api</span>
					<span>·</span>
					<span>main</span>
					<span>·</span>
					<span>Git 2.47.1</span>
				</div>
			</div>

			<Tabs
				value={activeTab}
				onValueChange={handleTabChange}
				className='flex items-end'
			>
				<TabsList
					variant='line'
					className='h-full w-1/2 justify-around rounded-none bg-transparent p-0'
				>
					{repositoryTabs.map((tab) => (
						<TabsTrigger
							key={tab.value}
							value={tab.value}
							className='h-full rounded-none px-4 text-xs'
						>
							{tab.label}

							{tab.value === 'changes' && (
								<span className='ml-1 text-muted-foreground'>4</span>
							)}
						</TabsTrigger>
					))}
				</TabsList>
			</Tabs>
		</div>
	);
}
