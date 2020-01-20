import React from 'react';
import { gql } from 'apollo-boost'; // parse graph query language to javascript
import { useQuery } from '@apollo/react-hooks'; //importing useQuery hook

//queries
const getAuthorsQuery = gql`
    {
        authors {
            name
            id
        } 
    }
`;

const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    
    const authorList = 
        loading 
            ? 
                <option>Loading Authors...</option>
            : 
                data.authors.map(author => {
                    return <option key={author.id}>{author.name}</option>
                })

    return (
        <form id="add-book">
            <div className="field">
                <label>Book name:</label>
                <input type="text"/>
            </div>
            
            <div className="field">
                <label>Genre:</label>
                <input type="text"/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select>
                    <option>Select Author</option>
                    {authorList}
                </select>
            </div>
            <button>+</button>
      </form>
    )
}

export default AddBook;