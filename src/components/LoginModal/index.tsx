import * as Dialog  from "@radix-ui/react-dialog"
import { X } from "@phosphor-icons/react";

import { CloseButton, Content, Overlay, NewProfileButton } from './styles';
import { RegisterProfileModal } from "../RegisterProfileModal";

export function LoginModal() {
    return (
        <Dialog.Portal>
            <Overlay />

            <Content>
                <Dialog.Title>Login</Dialog.Title>

                <CloseButton>
                    <X size={24}/>
                </CloseButton>

                <form action="">
                    <input
                        type="text"
                        placeholder='E-mail'
                        required
                    />
                    <input
                        type="password"
                        placeholder='Senha'
                        required
                    />


                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewProfileButton>Cadastre-se</NewProfileButton>
                        </Dialog.Trigger>

                        <RegisterProfileModal />
                    </Dialog.Root>

                    <button type="submit">
                        Entrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}