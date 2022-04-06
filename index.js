 /* 

REPL
1. js expression
2. use variables
3. multiline code
4. use ( _ ) to get the last result
5. we can use editor mode

*/

// creating a new file
const fs = require('fs');
// fs.writeFileSync('read.txt', 'welcome to my channel');
// Overwrite kar dega
// fs.writeFileSync('read.txt', 'saqib hussain welcome');
// fs.appendFileSync('read.txt', 'how are you i am fine');




const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

// string mai convert karne k liye
org_data = buf_data.toString();
console.log(org_data);

// to rename the file 
fs.renameSync('read.txt', 'readwrite.txt'); 