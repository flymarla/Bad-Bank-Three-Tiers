const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
    console.log('Connected!');
    
    // database Name
    const dbName = 'myproject';
    const db = client.db(dbName);
    
    // new user
    var name = 'user' + Math.floor(Math.random()*10000);
    var email = name + '@cat.com';
    
    // insert into customer table
    const collection = db.collection('customers');
    const doc = {name, email};
    collection.insertOne(doc, {w:1}, function(err, result) {
        console.log('Document inserted');
    });

    const customers = db
        .collection('customers')
        .find()
        .toArray(function(err, docs){
            console.log('Collection: ', docs);

            // clean up
            client.close();
        })
});