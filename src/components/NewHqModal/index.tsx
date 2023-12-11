import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, XCircle, X } from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import { useContext } from 'react';

import { BooksHQsContext } from "../../context/BooksHQsContext";

import { BookHQType, BookHQTypeButton, CloseButton, Content, Overlay } from './styles';

const newBookHqSchema = z.object({
    titulo: z.string(),
    autor: z.string(),
    editora: z.string(),
    ano: z.number(),
    status: z.enum(['check', 'noCheck']),
    nota: z.number(),
    comentario: z.string(),
})

type NewBookHqFormInputs = z.infer<typeof newBookHqSchema>

export function NewHqModal() {
    const { createBookHQ } = useContext(BooksHQsContext)

    const { 
        control,
        register, 
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewBookHqFormInputs>({
        resolver: zodResolver(newBookHqSchema),
    })

    async function handleCreateNewBookHQ(data: NewBookHqFormInputs) {
        const { titulo, autor, editora, ano, status, nota, comentario } = data;

        await createBookHQ({
            titulo, 
            autor, 
            editora, 
            ano, 
            status, 
            nota, 
            comentario,
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Nova HQ</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewBookHQ)}>
                    <input
                        type="text"
                        placeholder='Título'
                        required
                        {...register('titulo')}
                    />
                    <input
                        type="text"
                        placeholder='Autor'
                        required
                        {...register('autor')}
                    />
                    <input
                        type="text"
                        placeholder='Editora'
                        required
                        {...register('editora')}
                    />
                    <input
                        type="number"
                        placeholder='Ano'
                        required
                        {...register('ano', { valueAsNumber: true })}
                    />
                    <input
                        type="number"
                        placeholder='Nota'
                        {...register('nota', { valueAsNumber: true })}
                    />
                    <input
                        type="string"
                        placeholder='Comentário'
                        {...register('comentario')}
                    />

                    <Controller 
                        control={control}
                        name="status"
                        render={({ field }) => {
                            return (
                                <BookHQType onValueChange={field.onChange} value={field.value}>
                                    <BookHQTypeButton  variant='check' value='check'>
                                        <CheckCircle size={24}/>
                                        Lido
                                    </BookHQTypeButton>

                                    <BookHQTypeButton  variant='noCheck' value='noCheck'>
                                        <XCircle size={24}/>
                                        Não lido
                                    </BookHQTypeButton>
                                </BookHQType>
                            )}}
                    />
                    


                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}