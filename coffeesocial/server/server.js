const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://coffeeHost:un6Iew8vJRmFvTgp@cluster0.zm1cj.mongodb.net/coffeeHost?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});