import { useContext } from "react";
import { BooksHQsContext } from "../context/BooksHQsContext";

export function useSummary() {
    const { booksHQs } = useContext(BooksHQsContext)

    const summary = booksHQs.reduce(
        (acc, bookHQ) => {
            if(bookHQ.status === 'check'){
                acc.check++
            }

            return acc
        }, 
        { 
            check: 0,
            total: booksHQs.length,
        }
    )

    return summary
}