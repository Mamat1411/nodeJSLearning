const { mongoClient, MongoClient } = require("mongodb");

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'dbEmployee';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

client.connect((err, client) => {
    if (err) {
        return console.log("Connection Failed");
    }
    console.log("Connection Success");

    //choose database
    const db = client.db(dbName);

    //Add 1 document into employee collection
    // db.collection('employee').insertOne(
    //     {
    //         name : "Muhammad",
    //         email : "muhammad@gmail.com"
    //     },
    //     (err, result) => {
    //         if (err) {
    //             return console.log("Insert Data Failed");
    //         }

    //         console.log(result);
    //     }
    // );

    //Add Multiple Documents into Employee Collection
    // db.collection('employee').insertMany(
    //     [
    //         {
    //             name: "Maher",
    //             email: "maher@gmail.com"
    //         },
    //         {
    //             name: "Azza",
    //             email: "azza@gmail.com"
    //         },
    //         {
    //             name: "Mazen",
    //             email: "mazen@gmail.com"
    //         }
    //     ],
    //     (err, results) => {
    //         if (err) {
    //             return console.log("Insert Data Failed");
    //         }

    //         console.log(results);
    //     }
    // );

    //Show All Documents from Database
    console.log(
        db
        .collection('employee')
        .find()
        .toArray((err, results) => {
            if (err) {
                return console.log("Show Data Failed");
            }
            console.log(results);
        })
    );
});