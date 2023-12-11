import styled from "styled-components";

export const BooksHQsContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const BooksHQsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    span {
        display: flex;
        align-items: center;

        p {
            padding: 0.5rem;
        }
    }  

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme['gray-700']};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

export const BooksHQsLixeira = styled.table`
    display: flex;
    align-items: center;
    
    button {
        background: transparent;
        border: 0;
        color: ${props => props.theme['gray-400']};
        cursor: pointer;
        line-height: 0;
        border-radius: 2px;

        &:hover {
            color: ${props => props.theme['red-500']};
        }
    }
`;