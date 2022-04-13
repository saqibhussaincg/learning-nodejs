const express = require('express');
const app = express();


// ROUTING WITH EXPRESS & RENDER IN HTML

// app.get('', (req, res) => {
//     console.log('data send by browser ===>', req.query.name); // request browser se arahi hai eg: localhost:5000/?name=saqib
//     res.send('<h2>welcome, home page </h2>' +  req.query.name) // recieving on browser
// });



// making href links
// app.get('', (req, res) => {
//     res.send(`
//     <h2>welcome to Home Page</h2> <a href="/about"> about page link </a>
//     `)
// });

// app.get('/about', (req, res) => {
//     res.send(`
//     <h2> This is about page </h2> <a href="/"> home page link </a>
//     `)
// });

// app.get('/help', (req, res) => {
//     res.send({
//         name: 'saqib',
//         email: 'saqib@gmail.com'
//     })
// });




// ==== making calling HTML PAGES =====

// calling another file from another folder or same folder

const path = require('path');


const publicpath = path.join(__dirname, '') // agar same foler mai file ho tou empty chorh denge 
// bs fodler ka path de dia ab os k andar jitni files hongi sub ko access kar dega

// app.use(express.static(publicpath));

// page direct call karne k liye .html likhne ki zarurat nahi hogi ab
app.get('', (req, res) => {
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/home', (req, res) => {
    res.sendFile(`${publicpath}/home.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${publicpath}/about.html`)
})

// galat url dalne per * ka sign show hoga
app.get('*', (req, res) => {
    res.sendFile(`${publicpath}/errorpage.html`)
})



app.listen(5000);