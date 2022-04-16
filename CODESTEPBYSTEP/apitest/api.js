// Geting API data

const express = require('express');
const dbConnect = require('../mongodbtest/mongodb');

const app = express(); 

// jub postman se manualy data post send karte hain hain tou json mai convert karne k liye ye command likhna zaruri hai
app.use(express.json());


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


app.put('/', (req, res) => {
    res.send({result:"update"})
})

app.listen(5000);