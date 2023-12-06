import * as Dialog from "@radix-ui/react-dialog";

import { NewHqModal } from "../NewHqModal";
import { LoginModal } from "../LoginModal";

import { HeaderContainer, HeaderContent, NewHqButton } from "./styles";
import logoImg from '../../assets/logo.png';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />

                <div>
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewHqButton>Login</NewHqButton>
                        </Dialog.Trigger>

                        <LoginModal />
                    </Dialog.Root>
                    {' '}
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <NewHqButton>Novas HQ's</NewHqButton>
                        </Dialog.Trigger>

                        <NewHqModal />
                    </Dialog.Root>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}