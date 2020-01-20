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

const addBookMutation = gql`
    mutation ($name: String!, $genre: String!, $authorId: ID!) {
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`
    # singular book query
    query ($id: ID!) {
        book(id: $id){
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;


export {getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery};