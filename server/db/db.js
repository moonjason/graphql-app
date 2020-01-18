const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

const uri = "mongodb+srv://jasonMoon:<password>@graphql-practice-nt6ix.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri,{ useNewUrlParser: true , useUnifiedTopology: true } );

client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('conneccted')
  // perform actions on the collection object
    client.close();
});

mongoose.connection.on('connected', () => {
console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on('disconnected', () => {
console.log('Mongoose disconnected');
});

mongoose.connection.on('error', (err) => {
console.log('Mongoose error: ', err);
});
