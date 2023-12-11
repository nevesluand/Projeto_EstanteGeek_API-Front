import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface BookHQ {
    id: number;
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    status: 'check' | 'noCheck';
    nota: number;
    comentario: string;
}

interface CreateBookHQInput {
    titulo: string;
    autor: string;
    editora: string;
    ano: number;
    status: 'check' | 'noCheck';
    nota: number;
    comentario: string;
}

interface BookHqContextType {
    booksHQs: BookHQ[];
    fetchBooksHQs: (query?: string) => Promise<void>;
    createBookHQ: (data: CreateBookHQInput) => Promise<void>;
    deleteBooksHQs: (id: number) => Promise<void>;
}

interface BookHqProviderProps {
    children: ReactNode;
}

export const BooksHQsContext = createContext({} as BookHqContextType)

export function BookHqProvider({ children }: BookHqProviderProps){
    const [booksHQs, setBooksHQs] = useState<BookHQ[]>([])

    async function fetchBooksHQs(query?: string) {
        const response = await api.get('editions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setBooksHQs(response.data)
    }

    async function createBookHQ(data: CreateBookHQInput){
        const { titulo, autor, editora, ano, status, nota, comentario } = data;

        console.log(nota)
        console.log(comentario)

        const response = await api.post('editions', {
            titulo, 
            autor, 
            editora, 
            ano, 
            status, 
            nota, 
            comentario,
        })

        setBooksHQs(state => [response.data, ...state]);
    }

    async function deleteBooksHQs(id: number) {
        const response = await api.delete('editions', {
            params: {
                id: id
            }
        })

        setBooksHQs(response.data)
    }

    useEffect(() => {
        fetchBooksHQs();
    }, [])

    return (
        <BooksHQsContext.Provider value={{ 
            booksHQs,
            fetchBooksHQs,
            createBookHQ,
            deleteBooksHQs
        }}>
            {children}
        </BooksHQsContext.Provider>
    )
}