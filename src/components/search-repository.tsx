import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useController, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useRepositories } from '@/context/repository-context';
import { Input } from './ui/input';

const searchRepositorySchema = z.object({
	search: z.string(),
});

type SearchRepositoryFormData = z.infer<typeof searchRepositorySchema>;

export function SearchRepository() {
	const { searchRepositories } = useRepositories();

	const { control, handleSubmit } = useForm<SearchRepositoryFormData>({
		resolver: zodResolver(searchRepositorySchema),
		defaultValues: {
			search: '',
		},
	});

	const {
		field,
		fieldState: { error },
	} = useController({
		name: 'search',
		control,
	});

	function handleSearchRepositories({ search }: SearchRepositoryFormData) {
		searchRepositories(search);
	}

	function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
		field.onChange(event);
		searchRepositories(event.target.value);
	}

	return (
		<form
			className='flex items-center gap-2'
			onSubmit={handleSubmit(handleSearchRepositories)}
		>
			<Search className='size-5 shrink-0 text-muted-foreground' />

			<Input
				name={field.name}
				ref={field.ref}
				onBlur={field.onBlur}
				onChange={handleSearchChange}
				value={field.value}
				aria-invalid={Boolean(error)}
				placeholder='Buscar repositório'
				className='w-full'
			/>
		</form>
	);
}
