import { useContext } from "react";
import { Book, ListChecks, User } from "@phosphor-icons/react/dist/ssr";

import { SummaryContainer, SummaryCard } from "./styles";

import { ProfileContext } from "../../context/ProfilesContext";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
    const { profiles } = useContext(ProfileContext)
    const summary = useSummary();

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Perfil</span>
                    <User size={32} color="#FFF"/>
                </header>
                {profiles.map(profile => {
                    return(
                        <strong key={profile.id}>{profile.nome}</strong>
                    )
                })}
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>HQ's Lidas</span>
                    <ListChecks size={32} color="#00B37E"/>
                </header>
                <strong>{summary.check}</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Total de HQ's</span>
                    <Book size={32} color="#7FFFD4"/>
                </header>
                <strong>{summary.total}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}