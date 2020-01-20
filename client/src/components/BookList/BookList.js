import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'; //importing useQuery hook
import { getBooksQuery } from '../../queries/queries';

//components
import BookDetails from '../BookDetails/BookDetails';

const BookList = () => {
    const [selected, setSelected] = useState();
    const { loading, error, data } = useQuery(getBooksQuery);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const { books } = data;
    console.log(books)

    const bookListItems = books.map( (book) => {
        return <li key={book.id} onClick={(e) => setSelected(book.id)}>{book.name}</li>;
    });
  
    return (
        <div>
            <ul id="booklist">
                {bookListItems}
            </ul>
            <BookDetails bookId={selected}/>
        </div>
    )
}

export default BookList;