const mongoose = require('mongoose');
// mongoose is an odm (object oriented data-model)
const connectionString = "mongodb+srv://moonJason:test123@graphql-practice-nt6ix.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(connectionString, { useNewUrlParser: true,
                                     useUnifiedTopology: true,
                                     useCreateIndex: true,
                                     useFindAndModify: false
                                    });


mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to GraphQL-Practice`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose error: ', err);
});