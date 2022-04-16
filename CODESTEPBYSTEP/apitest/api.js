// Geting API data

const express = require('express');
const dbConnect = require('../mongodbtest/mongodb');

const app = express();


app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data); // check karne k liye data kia araha hai



    resp.send(data)

    // resp.send({name: 'saqib'})
     // yahan jo likhenge wo html mai show hoga
});

app.listen(5000);