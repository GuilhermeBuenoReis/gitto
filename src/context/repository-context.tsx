import {
	createContext,
	type ReactNode,
	useContext,
	useMemo,
	useState,
} from 'react';

type Repository = {
	id: string;
	name: string;
};

type RepositoryContextValue = {
	repositories: Repository[];
	activeRepositoryId: string | null;
	activeRepository: Repository | null;
	visibleRepositories: Repository[];
	filteredRepositories: Repository[] | ReactNode;
	searchRepository: string;
	setActiveRepositoryId: (repositoryId: string) => void;
	searchRepositories: (searchInput: string) => void;
	clearRepositorySearch: () => void;
};

const RepositoryContext = createContext<RepositoryContextValue | null>(null);

type RepositoryProviderProps = {
	children: ReactNode;
};

export function RepositoryProvider({ children }: RepositoryProviderProps) {
	const [repositories] = useState<Repository[]>([
		{ id: '1', name: 'anvero-api' },
		{ id: '2', name: 'anvero-web' },
		{ id: '3', name: 'anvero-landing' },
		{ id: '4', name: 'gitto-desktop' },
		{ id: '5', name: 'tenira-app' },
		{ id: '6', name: 'portfolio' },
		{ id: '7', name: 'faculdade-calculo' },
		{ id: '8', name: 'ecommerce-api' },
		{ id: '9', name: 'auth-service' },
		{ id: '10', name: 'design-system' },
		{ id: '11', name: 'ui-components' },
		{ id: '12', name: 'react-playground' },
		{ id: '13', name: 'node-labs' },
		{ id: '14', name: 'fastify-starter' },
		{ id: '15', name: 'supabase-tests' },
		{ id: '16', name: 'landing-page-template' },
		{ id: '17', name: 'dashboard-template' },
		{ id: '18', name: 'cli-tools' },
		{ id: '19', name: 'internal-docs' },
		{ id: '20', name: 'experiments' },
	]);

	const [activeRepositoryId, setActiveRepositoryId] = useState<string | null>(
		null,
	);

	const [searchRepository, setSearchRepository] = useState('');

	const activeRepository = useMemo(
		() =>
			repositories.find((repository) => repository.id === activeRepositoryId) ??
			null,
		[repositories, activeRepositoryId],
	);

	const visibleRepositories = useMemo(
		() => repositories.slice(0, 10),
		[repositories],
	);

	const filteredRepositories = useMemo(() => {
		const search = searchRepository.trim().toLowerCase();

		if (!search) {
			return repositories;
		}

		const filtered = repositories.filter((repository) =>
			repository.name.toLowerCase().includes(search),
		);

		if (filtered.length === 0) {
			return (
				<div className='flex h-80 flex-col items-center justify-center gap-1 text-sm text-muted-foreground'>
					<span className='text-lg font-medium text-red-600'>404</span>
					<span>Não há repositórios correspondentes à pesquisa.</span>
				</div>
			);
		}

		return filtered;
	}, [repositories, searchRepository]);

	function searchRepositories(searchInput: string) {
		setSearchRepository(searchInput);
	}

	function clearRepositorySearch() {
		setSearchRepository('');
	}

	return (
		<RepositoryContext.Provider
			value={{
				repositories,
				activeRepositoryId,
				activeRepository,
				visibleRepositories,
				filteredRepositories,
				searchRepository,
				setActiveRepositoryId,
				searchRepositories,
				clearRepositorySearch,
			}}
		>
			{children}
		</RepositoryContext.Provider>
	);
}

export function useRepositories() {
	const context = useContext(RepositoryContext);

	if (!context) {
		throw new Error('useRepositories must be used within a RepositoryProvider');
	}

	return context;
}
