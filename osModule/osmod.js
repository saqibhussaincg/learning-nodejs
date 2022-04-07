// Source Code : lib/os.js
// OS = operating system - Os ki information janne k liye use hota hai
// The os module provides operating system-related utility methods and properties. It can be accessed using:


const os = require('os');

// operating system ka version dekhne k liye
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());

const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);

const totalmemory = os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);