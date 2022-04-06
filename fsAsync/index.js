const fs = require('fs');

// async k liye arrow function use karna parhega

fs.writeFile('read.txt', ' today is ramadan day', 
(err) => {
     console.log('file is created');
     console.log(err); // check koi error aya ya nahi
}
)

fs.appendFile('read.txt', ' aaj pepsi or jam e sheren mila', 
(err) => {
    console.log('data added');
    console.log(err);
})

fs.readFile('read.txt', 'utf-8', 
(err, data) => {
    console.log(err, data);
} )

/* 



*/

