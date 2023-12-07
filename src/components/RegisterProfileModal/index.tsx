import * as Dialog  from "@radix-ui/react-dialog"
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";

import { api } from "../../lib/axios";

import { CloseButton, Content, Overlay } from './styles';

const newProfileSchema = z.object({
    nome: z.string(),
    nome_usuario: z.string(),
    email: z.string(),
    senha: z.string(),
})

type NewProfileFormInputs = z.infer<typeof newProfileSchema>

export function RegisterProfileModal() {
    const { 
        register, 
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewProfileFormInputs>({
        resolver: zodResolver(newProfileSchema),
    })

    async function handleCreateNewProfile(data: NewProfileFormInputs) {
        const { nome, nome_usuario, email, senha } = data
        
        await api.post('profiles', {
            nome,
            nome_usuario,
            email,
            senha,
        })

        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                  <Dialog.Title>Novo Cadastro</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewProfile)}>
                    <input
                        type="text"
                        placeholder='Nome'
                        required
                        {...register('nome')}
                    />
                    <input
                        type="text"
                        placeholder='Nome de usuário'
                        required
                        {...register('nome_usuario')}
                    />
                    <input
                        type="text"
                        placeholder='E-mail'
                        required
                        {...register('email')}
                    />
                    <input
                        type="text"
                        placeholder='Senha'
                        required
                        {...register('senha')}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}