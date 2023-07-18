console.log("Hi there");

const http = require('http');
const server = http.createServer((req,res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("HI THERE");
});

server.listen(3000, '127.0.0.1', ()=>{
    console.log('The Server Is Running... ');
})          