const { mongoClient, MongoClient } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'dbEmployee';

const client = new MongoClient(uri);

client.connect((err, client) => {
    if (err) {
        return console.log("Connection Failed");
    }
    console.log("Connection Success");
});