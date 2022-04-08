// source code : lib/http.js

const http = require('http'); 

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello from the others sides');
     // res.end call karne k liye use hota hai 
});

server.listen(8000, '192.0.0.1', () => {
    console.log('listening to the port no 8000');
})


// RENDER 

/* 
{
    code: 'EADDRNOTAVAIL', 
    errno: -4090,
    syscall: 'listen',
    address: '192.0.0.1',
    port: 8000
}
 
*/