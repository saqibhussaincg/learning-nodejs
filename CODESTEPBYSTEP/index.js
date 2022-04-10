// const app = require ('./app')

// console.log(app);
// console.log(app.a);
// console.log(app.c);

// var x = 20;

// if( x === 20 )
// {
//     console.log('sahi');
// }
// else
// {
//     console.log('galat');
// }

// const arr = [ 2,4,6,8,10];
// console.log(arr);

// let result = arr.filter((item) => {
//     return ( item < 6 );
// })

// console.log(result);

// ------------ CORE MODULE ----------------

const fs = require('fs');

// file create karne k liye
// fs.writeFileSync('hello.txt', ' learning node js ');
// console.log('----->>>', __dirname);
// console.log('----->>>', __filename);


// console.log(process.argv);

// ------- Creating File Lists Multilple -----

const path = require('path');
const dirPath = path.join(__dirname, 'filelist');

// for( i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath+'/Hello'+i+'.txt','Hi');
// }

fs.readdir(dirPath, (err, item) => {
    item.map( (items) => {
        console.log('--->>>', items);
    })
})