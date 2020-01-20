const express = require('express');
const graphqlHTTP = require('express-graphql'); //variable is a naming convention of graphql (different requirement name vs variable)
// this allows us to handle graphql requests on express ^^ 
const cors = require('cors')
const schema = require('./schema/schema');
const app = express();

require('./db/db');

//allow cross origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema, // same as schema: schema (ES6 ftw)
    graphiql: true
})) // middleware for graphql endpoints

app.listen(4000, () => {
    console.log('Now listening for requests on port 4000');
})

