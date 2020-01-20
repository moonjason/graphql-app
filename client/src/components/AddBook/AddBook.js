import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks'; //importing useQuery hook
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../../queries/queries';

const AddBook = () => {
    const [form, setForm] = useState()
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation)

    const authorList = 
        loading 
            ? 
                <option>Loading Authors...</option>
            : 
                data.authors.map(author => {
                    return <option key={author.id} value={author.id}>{author.name}</option>
                });

    const submitForm = (e) => {
        e.preventDefault();
        console.log(form)
        addBook({ 
            variables: {
                name: form.name,
                genre: form.genre,
                authorId: form.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
         })
    }

    return (
        <form id="add-book" onSubmit={(e) => submitForm(e)}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" onChange={(e) => setForm({...form, name: e.target.value})}/>
            </div>
            
            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={(e) => setForm({...form, genre: e.target.value})}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setForm({...form, authorId: e.target.value})}>
                    <option>Select Author</option>
                    {authorList}
                </select>
            </div>
            <button>+</button>
      </form>
    )
}

export default AddBook;