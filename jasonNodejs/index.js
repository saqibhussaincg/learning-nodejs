const bioData = {
    name : 'saqib',
    age : 50,
    channel : 'thapa technical',
}

console.log(bioData.channel);

// json mai convert karne k liye
const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// wapas json data ko object mai convert karne k liye

const objData = JSON.parse(jsonData); 
console.log(objData);
console.log(objData.channel);


 
/* 
1. convert to JSON 
2. dusre file mai add kar dena
3. read file
4. again convert back to json obj original
5. console.log
*/

const fs = require('fs');

const bioDatas = {
    name : 'sufiyan',
    age : 100,
    channel : 'inno sufiyan'
}

// const jsonDatas = JSON.stringify(bioDatas);
// fs.writeFile('json1.json', jsonDatas, (err) => {
//     console.log('done');
// });

fs.readFile('json1.json', 'utf-8', (err, data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})