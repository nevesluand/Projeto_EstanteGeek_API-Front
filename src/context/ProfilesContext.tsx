import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Profile {
    id: number;
    nome: string;
    nome_usuario: string;
    email: string;
    senha: string;
}

interface CreateProfileInput {
    nome: string;
    nome_usuario: string;
    email: string;
    senha: string;
}

interface ProfileContextType {
    profiles: Profile[];
    fetchProfiles: (query?: string) => Promise<void>;
    createProfile: (data: CreateProfileInput) => Promise<void>;
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

    async function createProfile(data: CreateProfileInput) {
        const { nome, nome_usuario, email, senha } = data;

        const response = await api.post('profile', {
            nome, 
            nome_usuario, 
            email, 
            senha
        })

        setProfiles(state => [response.data, ...state])
    }

    useEffect(() => {
        fetchProfiles();
    }, [])

    return (
        <ProfileContext.Provider value={{ 
            profiles, 
            fetchProfiles,
            createProfile,
        }}>
            {children}
        </ProfileContext.Provider>
    )
}