const http = require("http");

const express = require("express");

const app = express();

const server = http.createServer(app);

app.use(express.static("/public"));

app.get('/',(req,res)=>{
 return res.sendFile("/index.html")
});

server.listen(9000, () =>console.log(`Server Started at:9000`))