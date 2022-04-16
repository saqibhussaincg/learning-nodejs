const dbConnect = require('./mongodb')
// const {MongoClient} = require('mongodb');

// // Connection URL
// const url = 'mongodb://localhost:27017';

// const client = new MongoClient(url);

// const database = 'e-comm';

// async function dbConnect()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     return db.collection('products');

//     // let collection = db.collection('products');

//     // ye wala poora ka poora data dikha dekha 
//     // let response = await collection.find({}).toArray();

//     // find single database 
//     // let response = await collection.find({name: 'M40'}).toArray();

//     // console.log(response);

//     // console.log(collection.find({}).toArray());

//     // find method is andar jo data hoga hai os k andar se nikal k la kar deta hai 
//     // toArray is ko structure format mai convert kar deta hai 
// }

// TAREEKA NUMBER 01

// dbConnect().then((res) => {
//   res.find().toArray().then(( data ) => {
//     console.log(data);
//   });
// })

// TAREEKA NUMBER 02

// ye data connect hota hua araha hai mongodb wali file se or idhar connectio kara rahay hain find karne k liye 
// READING DATA    
const main = async () => {

    let data = await dbConnect();
    data = await data.find().toArray();

    console.log(data);

}

main();

