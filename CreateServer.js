const loader=require("loader");
const http=require("http");
const hostname="127.0.0.1";
const port=3000;

const server=http.createServer((req,res1) => {
res1.statusCode=200;
res1.setHeader('Content-Type', 'text/plain');
res1.end("This is create server demo");
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http:/${hostname}.${port}/`);
})