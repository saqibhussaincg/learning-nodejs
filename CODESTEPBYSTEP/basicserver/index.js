 // http server k request response ko hande karta hai

const http = require('http');

const dataControl = (req, resp) => 
{
    resp.write('hello this is saqib hussain');
    resp.end();   
}

http.createServer(dataControl).listen(4500);

// http.createServer((req, resp) => {
//     resp.write('hello this is saqib hussain');
//     resp.end();
// }).listen(4500); 
