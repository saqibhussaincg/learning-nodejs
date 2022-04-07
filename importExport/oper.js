// HOW TO CREATE YOUR OWN MODULE

// jub function ko call karte waqt value pass karte hain wo argument kehlati hai


// this is called parameter value in ( )   
const add = (a, b) => {
    return a + b
};

const sub = (a, b) => {
    return a + b
};

const multiply = (a, b) => {
    return a * b
}

const name = 'saqib';

// . k baad koi bhi name de sakte hain 
module.exports.add = add;
module.exports.sub = sub;
module.exports.name = name;

 // object destructuring
 module.exports = { add, sub, multiply, name}

/* 
module ka code private hota hai 
oublic karna parhega dosre module mai use karne k liye 

*/