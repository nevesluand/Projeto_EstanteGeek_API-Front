import { useContext } from "react";
import { Star } from "@phosphor-icons/react/dist/ssr";

import { Header } from '../../components/Header';
import { Summary } from '../../components/Summary';
import { SearchForm } from './components/SearchForm';

import { BooksHQsContext } from "../../context/BooksHQsContext";

import { BooksHQsTable, BooksHQsContainer } from './styles';
import { ProfileProvider } from "../../context/ProfilesContext";

export function BooksHQs() {
    const { booksHQs } = useContext(BooksHQsContext)

    return (
        <div>
            <Header />
            <ProfileProvider>
                <Summary />
            </ProfileProvider>
            

            <BooksHQsContainer>
                <SearchForm />

                <BooksHQsTable>
                    <tbody>
                        {booksHQs.map(bookHQ => {
                            return(
                                <tr key={bookHQ.id}>  
                                    <td width="40%">{bookHQ.titulo}</td>
                                    <td>{bookHQ.autor}</td>
                                    <td>{bookHQ.editora}</td>
                                    <td> 
                                        <span>
                                            <Star size={25} color="#FFD700"/>
                                            <p>{bookHQ.nota}</p>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </BooksHQsTable>
            </BooksHQsContainer>
            
        </div>
    )
}