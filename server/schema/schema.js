const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql; //destructuring grabs that GraphQLObjectType from graphql requirement

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString },
        genre: {type: GraphQLString }
    }) // we do a function here to avoid reference errors when we have multiple types
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: {type: GraphQLString} }, // => book(id: '123') these are the arguments per book
            resolve(parent, args) {
                //code to get data from db / other source 
                // parent comes in when we look at relationships between data
                args.id 
            }
        }
    } // doesn't need to be in a function cuz we don't care about order
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
