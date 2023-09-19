import { useForm } from "react-hook-form";
import { SearchFormContainer } from "./Styles";
import { MagnifyingGlass } from "phosphor-react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TransactionsContext } from "../../../../Contexts/TransactionsContext";
import { memo } from 'react';

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>


 function SearchFormComponent() {

  const FetchTtansaction = useContextSelector(TransactionsContext, (context)=> {
    return context.FetchTtansaction
  })  

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<searchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSubmitTransections(data: searchFormInputs) {
    await FetchTtansaction(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSubmitTransections)}>
      <input type='text' placeholder=' Busque por transações' {...register('query')} />

      <button type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}

export const SearchForm = memo( SearchFormComponent);