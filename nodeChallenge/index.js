// Challenge Time 

/* 
1. create a folder and named it thaoa 
2. create a file in it named bio.txt and data into it
3. add more data into the file at the end of the existing data
4. read the data without getting the buffer data at first
file encoding
5. rename the file name to mybio.txt
6. now delete both the file and the folder


*/


// 01 - creating folder / directory 

const fs = require('fs');

// fs.mkdirSync('thapa'); 

// bio wali nahi bani hogi tou bana dega or os k andar ye text daal dega
// 02 - thapa k folder k andar bio.txt ki file banao 

// 03 - fs.writeFileSync('thapa/bio.txt', 'my name is vinod thapa')


// 04 - add more data into the existing file
// fs.appendFileSync('thapa/bio.txt', 'please subscribe to my channel');


// 05 - read file k liye utf8 lagana parhege takay wo string mai data show karaye warna buffer(BINARY) mai show karaye ga
// const data = fs.readFileSync('thapa/bio.txt', 'utf8');
// console.log(data);
 
// 06 - rename  karne k liye pehle wali file ka name or jo name dena hai wo
// fs.renameSync('thapa/bio.txt',  'thapa/mybio.txt')

// 07 - delete file
// fs.unlinkSync('thapa/mybio.txt');

// folder / directory delete karne k liye
// fs.rmdirSync('thapa');
