const fs = require('fs');

// const data = fs.readFileSync('read.txt', 'utf-8');
// console.log(data);



/* 
pehle bahar wala console show hoga kyun k jaldi show hogaya
jub k read wali file baad mai call kyun k os mai time laga data ziada tha
this is called async function
*/
fs.readFile('read.txt', 'utf-8', (err, data) => {

    console.log(data);

})

console.log('after the data');


