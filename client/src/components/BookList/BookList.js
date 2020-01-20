import React from 'react';
import { gql } from 'apollo-boost'; // parse graph query language to javascript
import { useQuery } from '@apollo/react-hooks'; //importing useQuery hook

//queries
const getBooksQuery = gql`
    {
        books {
            name
            id
        } 
    }
`;

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { books } = data;
    console.log(data)
    const bookListItems = books.map( ({ id, name }) => {
        return <li key={id}>{name}</li>;
    });
  
    return (
        <div>
            <ul id="booklist">
            </ul>
        </div>
    )
}

export default BookList;