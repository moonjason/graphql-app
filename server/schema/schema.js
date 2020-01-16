const graphql = require('graphql');
const _ = require('lodash');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID, //flexible data type to accessing ids
    GraphQLInt,
    GraphQLList
} = graphql; //destructuring grabs that GraphQLObjectType from graphql requirement

// dummy data
const books = [
    {name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1'},
    {name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2'},
    {name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3'},
    {name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2'},
    {name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3'},
    {name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3'}
  ]

const authors =  [
    {name: 'Patrick Rothfuss', age: 44, id:"1"},
    {name: 'Brandon Sanderson', age: 42, id:"2"},
    {name: 'Terry Pratchett', age: 66, id:"3"},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({ // why do we wrap this around function? for relation types, these fields run once we the other Types are defined so no errors pop up
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        genre: {type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent)
                return _.find(authors, {id: parent.authorId}) // creating relation
            }
        }
    }) // we do a function here to avoid reference errors when we have multiple types
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: {type: GraphQLID },
        name: {type: GraphQLString },
        age: {type: GraphQLInt },
        books: {
            type: new GraphQLList(BookType), //GraphQl LIST of Booktype
            resolve(parent, args){
                return _.filter(books, {authorId: parent.id})
            }
        }
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
        },
        author: {
            type: AuthorType,
            args: { id: {type: GraphQLID} },
            resolve(parent, args){
                return _.find(authors, { id: args.id })
            }
        }
    } // doesn't need to be in a function cuz we don't care about order
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
