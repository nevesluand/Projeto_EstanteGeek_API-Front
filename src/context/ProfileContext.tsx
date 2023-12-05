import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Profile {
    id: number;
    nome: string;
    nome_usuario: string;
    email: string;
    senha: string;
}

interface ProfileContextType {
    profiles: Profile[];
}

interface ProfileProviderProps {
    children: ReactNode;
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps){
    const [profiles, setProfiles] = useState<Profile[]>([])

    async function fetchProfiles(query?: string) {
        const response = await api.get('profile', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setProfiles(response.data)
    }

    useEffect(() => {
        fetchProfiles();
    }, [])

    return (
        <ProfileContext.Provider value={{ profiles }}>
            {children}
        </ProfileContext.Provider>
    )
}