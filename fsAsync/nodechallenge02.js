const fs = require('fs');

// creating folder directory
// fs.mkdir('thapa', (err) => {
//     console.log('folder created');
// });

// creating file
// fs.writeFile( './thapa/bio.txt', ' mera naam saqib hai', (err) => {
//     console.log('file create hogai hai');
// }
// )

// append data os k andar data or dalna
// fs.appendFile('./thapa/bio.txt', ' aaj pepsi mili aaj news mai ahsan kardia', (err) => {
//     console.log('data add hogaya or ziada');
// })


// reading file but add utf8 so wo buffer(binary mai show na ho)

// fs.readFile('./thapa/bio.txt', 'utf-8', (err, data) => {
//     console.log(data);
//     console.log('reading file');
// })

// rename karne k liye
// fs.rename('.thapa/bio.txt', './thapa/myBio.txt', (err) => {
//     console.log('rename done');
// })

// single file delete karne k liye 
fs.unlink('bio.txt', (err) => {
    console.log('delete hogai file');
    console.log(err);
})

// folder directory delete karne k liye
fs.rmdir('./thapa', (err) => {
    console.log('folder directory deleted');
})