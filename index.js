const http = require("http");
const express = require("express");
const path = require('path');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  socket.on("user-message", (message) => {
    console.log("A new User Message", message);
    io.emit("chat-message", message); // Broadcasting the message to all connected clients
  });
});

app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

server.listen(9000, () => console.log('Server Started at: 9000'));
