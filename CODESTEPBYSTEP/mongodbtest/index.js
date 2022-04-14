const res = require('express/lib/response');
const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);

const database = 'e-comm';

async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');

    // let collection = db.collection('products');

    // ye wala poora ka poora data dikha dekha 
    // let response = await collection.find({}).toArray();

    // find single database 
    // let response = await collection.find({name: 'M40'}).toArray();

    // console.log(response);

    // console.log(collection.find({}).toArray());

    // find method is andar jo data hoga hai os k andar se nikal k la kar deta hai 
    // toArray is ko structure format mai convert kar deta hai 
}

dbConnect().then((res) => {
    console.log(res.find().toArray());
})
dbConnect();