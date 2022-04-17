// Geting API data

const express = require('express');
const dbConnect = require('../mongodbtest/mongodb');

const app = express(); 

// jub postman se manualy data post send karte hain hain tou json mai convert karne k liye ye command likhna zaruri hai
app.use(express.json());


// instance mongo db ka delete karne k liye
const mongoDb = require('mongodb');


// is ko ek alag function mai bana kar bhi rakh sakte hain alag file mai 
app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data); // check karne k liye data kia araha hai



    resp.send(data)

    // resp.send({name: 'saqib'})
     // yahan jo likhenge wo html mai show hoga
});

// get or post ka / path same de sakte hain conflict nahi hoga kyun k dono alag hain

// postman mai data post karne k liye

// postman se data add kara send kara or wo mongodb k database mai agaya ---- acknowleged teu inserted data 1
// POST API ki help se mongo database k andar data add kar sakte hain
app.post('/', async (req, res) => {
    console.log(req.body);

    let data = await dbConnect();
    let result = await data.insert(req.body)
    res.send(result)


    // res.send(req.body) checking 
    // res.send({name : 'saqib'}) for checking sending data to postman
})


// postman se manualy data likh k send kardia ab isay get kese kar sakte hain
// app.put('/:name', async (req, res) => {
    // agar postman k param se change karna hai tou agar name mai same name hoga tou match hi nahi hoga tou postman  k param mai naam denge /S25 or req.param.name ho jayega

      
app.put('/', async (req, res) => {
    // ab jese hi postman se send karenge tou wahan jo manualy body mai data likha tha wo console mai show kara dega
    console.log(req.body);


    let data = await dbConnect(); // connecting mongo

    // result query likhenge dekhenge k successful data hua ya nahi

    // update one function lega os k andar 2 object lega pehle mai condition hogi or 2nd mai jo updata karna chahte hain wo rahega
    let result = data.updateOne(
        {name : req.body.name}, // condition
        { $set : req.body} // dynamic
        // { $set : {price:900}} // static data
    )
    res.send({result:"update"})
})


// DELETE API METHOD

app.delete("/:id"), async (req,res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongoDb.ObjectId(req.params.id)})

    res.send(result)
}

app.listen(5000);