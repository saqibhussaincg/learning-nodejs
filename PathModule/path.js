// Source Code: lib/path.js

// The path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('path');

console.log(path.dirname('D:/saqib data/Node JS Practice/PathModule/path.js'));
console.log(path.extname('D:/saqib data/Node JS Practice/PathModule/path.js'));
console.log(path.basename('D:/saqib data/Node JS Practice/PathModule/path.js'));


const myPath = (path.parse('D:/saqib data/Node JS Practice/PathModule/path.js'));
console.log(myPath.name);
console.log(myPath.dir);
console.log(myPath.root);