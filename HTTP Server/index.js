const http = require("http");

const myServer = http.createServer((req, res)=>{
    console.log("New Req Rec.");
    res.end("Hello Rain");
});

myServer.listen(3000, ()=>{
    console.log("server started")
});