const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID 
} = graphql; //destructuring grabs that GraphQLObjectType from graphql requirement

// dummy data
const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3'}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        genre: {type: GraphQLString }
    }) // we do a function here to avoid reference errors when we have multiple types
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLID} }, // => book(id: '123') these are the arguments per book
            resolve(parent, args) {
                //code to get data from db / other source 
                // parent comes in when we look at relationships between data
                return _.find(books, { id: args.id });
            }
        }
    } // doesn't need to be in a function cuz we don't care about order
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
