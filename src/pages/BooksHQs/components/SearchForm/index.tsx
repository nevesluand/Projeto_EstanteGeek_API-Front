import * as z from 'zod';
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { BooksHQsContext } from "../../../../context/BooksHQsContext";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
    query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchBooksHQs } = useContext(BooksHQsContext)

    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting }
    } = useForm<SearchFormInputs>({
         resolver: zodResolver(searchFormSchema),
    })

    async function handleSearchBookHQ(data: SearchFormInputs) {
        await fetchBooksHQs(data.query)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchBookHQ)}>
            <input 
                type="text" 
                placeholder="Busque pela HQ" 
                {...register('query')}
            />

            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}