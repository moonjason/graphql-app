import React from 'react';
import { useQuery } from '@apollo/react-hooks'; //importing useQuery hook
import { getBooksQuery } from '../../queries/queries';

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { books } = data;
    console.log(books)

    const bookListItems = books.map( ({ id, name }) => {
        return <li key={id}>{name}</li>;
    });
  
    return (
        <div>
            <ul id="booklist">
                {bookListItems}
            </ul>
        </div>
    )
}

export default BookList;