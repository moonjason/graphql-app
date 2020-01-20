import { gql } from 'apollo-boost'; // parse graph query language to javascript

const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        } 
    }
`;

const getBooksQuery = gql`
    {
        books {
            name
            id
        } 
    }
`;

export {getAuthorsQuery, getBooksQuery};