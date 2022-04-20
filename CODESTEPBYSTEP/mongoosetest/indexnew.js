const express = require('express');
require('./config');

const Products = require('./products');

const app = express();

app.use(express.json()); // jub bhi data ata hai wo string k andar hota hai soay JSON mai convert karne k liye

app.post('/create', async (req, res) => {
   // POST METHOD
    // post man body se data send karenge tou idhar console mai dikh jayega
    // ab isay database mai store karna hai

    let data = new Products(req.body); // data body se araha hai 
    let result = await data.save(); // ye function data ko database k andar save kar dega or ye promise return karta hai jis k liye await async use karna hoga

    console.log(req.body);
    console.log(("RESULT +++", result));
    res.send(result); // api ko return mai milta hai
    res.send('done'); // check karne k liye aoi postman mai data ja raha ya nahi
})


// GET MOTHOD --- Finding

app.get('/list', async (req, res) => {
    let data = await Products.find();
    res.send(data)
})

// localhost5000/list ko GET method per hit karenge postman per tou jo data mongodb mai hoga wo show ho jayega postman mai


// Delete MOTHOD --- Delete

app.delete('/delete/:_id', async (req, res) => {

    console.log(req.params);

    let data = await Products.deleteOne(req.params);

    res.send(data)
})

// postman k params mai id dali tou data base se os id ka object delete hogaya



// PUT MOTHOD --- Update
app.delete('/update/:_id', async (req, res) => {

    console.log(req.params);

    let data = await Products.updateOne(
        
            req.params, 
            {$set: req.body} // req lao data lao postman ki body se
        
    );

    res.send(data)
})

/* 
1. mongo db se id select karenge jis object mai update karna ho
2. postman mai ja k params mai ja k os ki ko paste karenge
3. body mai jo bhi cheez update karni ho name,price ya brand wo type kar k os mai changes kar k send kar denge 
4. data mongodb mai update ho jayega
*/

/*
1. Delete method k liye id query param mai jayegi
*/



app.listen(5000)