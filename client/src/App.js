import React from 'react';
import ApolloClient from 'apollo-boost' //package that bundles things that we need 
import { ApolloProvider } from 'react-apollo'; // react-apollo binds graphql and React //enables us to get data from our end point {client} and injects it into React

//components
import BookList from './components/BookList/BookList'

// apollo client set up
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql' //End point we're making requests to 
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>GraphQL Practice - Reading List</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
