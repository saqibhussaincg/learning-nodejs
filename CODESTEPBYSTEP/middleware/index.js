const express = require("express");


// ========>>>>>>>><<<<<<<<<<<<<<=========
// importing middlware from external file

const reqFilter = require('./midwarereqfilter');
const app = express();



// aga hamre paas ziada routes hon tou os k liye ye use karain
const route = express.Router();

route.use(reqFilter)





// =======================================

// using middleware in same page 
// const reqFilter = (req, res, next) => {

//     if(!req.query.age)
//     {
//         res.send("please provide age");
//     }
//     else if(req.query.age < 18){
//         res.send("you cannot access to this page");
//     }
//     else{

//         next(); // kisi dosre page per jane k liye warna load karta rahega page show nahi karaye ga mtlb users walay page per nahi jayega ye load karta rahega
//     }

// }


// =======================================



// chcek karne k liye browser per likhna pahega eg: localhost:5000?age=30



// app.use(reqFilter) 

// kisi 1 specific page per restrition lagani hai tou app.use reqFilter ko hatana parhega




app.get('/', (req, res) => {
    res.send('welcome to home page')
})

// reqFilter os wale component mai rakh dia ab rout sirf is component per kaam karega
route.use('/users',  (req, res) => {
    res.send('welcome to users page')
})
// middlware apply nahi karna tou app.get lagega warna route.get
app.get('/about', (req, res) => {
    res.send('welcome to ABOUT page')
})

route.get('/product',  (req, res) => {
    res.send('welcome to PRODUCT page')
})

route.get('/contact',  (req, res) => {
    res.send('welcome to CONTACT page')
})

app.use('/' , route)

app.listen(5000);

/* 
application middlware route sub per apply hojate hain 
eg: about k page per bhi age mangega jub k os per age ka koi kaam nahi
*/

/* 
==== MIDDLE WARE TYPES
- application level middleware 'abhi hum ne ye use kare hain'
- router level middleware
- error handling middleware
- built in middleware
- third party middleware
*/

/* 
=== ROUTE LEVEL MIDDLE WARE ===
esse middleware jo single per bhi kaam karenge or group per bhi
*/
