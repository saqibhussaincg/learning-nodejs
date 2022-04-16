// Connecting MongoDB   

const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017'; // path de rahay hain ab is url ko mongo client k andar pass karna hai
const databaseName = 'e-comm';
const client = new MongoClient(url);


async function dbConnect()
{
    let result = await client.connect(); //  client se connect karo or ye promise response karta hai
    let db = result.db(databaseName); // kon se waly database se connect karna hai
    return db.collection('products'); // or kon sa collection chaiye - database ko ek variable mai store kara lia for easy purpose
}

module.exports = dbConnect;