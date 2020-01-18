const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://<username>:<password>@graphql-practice-nt6ix.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('connected')
  // perform actions on the collection object
  client.close();
});