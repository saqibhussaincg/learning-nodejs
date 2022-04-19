const express = require('express');
require('./config');

const Products = require('./products');

const app = express();

app.post('/create', (req, res) => {
    res.send('done');
})


app.listen(5000)