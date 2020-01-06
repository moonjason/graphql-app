const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql; //destructuring grabs that GraphQLObjectType from graphql requirement

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLString },
        name: {type: GraphQLString },
        genre: {type: GraphQLString }
    }) // we do a function here to avoid reference errors when we have multiple types
})