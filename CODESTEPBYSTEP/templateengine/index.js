const express = require('express');
const app = express();


const path = require('path');

const publicpath = path.join(__dirname, '') 

app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.sendFile(`${publicpath}/index.html`)
})


app.get('/profile', (req, res) => {
    const user = {
        name : 'inno',
        email : 'inno@gmail.com',
        city : 'memon nagar',
        skills : [
            'react', 'javascript', 'problem solver'
        ]
    }
    res.render('profile', {user}); // profile.ejs jo k html file mai wahan data send kar rahay hain
})

app.get('/login', (req, res) => {
    res.render('login');
})
app.listen(5000);