const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const PORT = process.env.PORT || 8080;

const COLORS = [
  "IndianRed",
  "Red",
  "Crimson",
  "Orange",
  "HotPink",
  "SteelBlue",
  "Green",
  "Fuchsia",
  "Brown",
  "SaddleBrown",
  "Salmon",
  "SeaGreen",
  "MidnightBlue",
  "Olive",
  "GoldenRod",
  "Indigo",
];

io.on("connection", (socket) => {
  const { roomID, user } = socket.handshake.query;
  const randColor = COLORS[Math.floor(Math.random() * COLORS.length)];
  //! Join appropriate room
  socket.join(roomID);
  //! Tell connected user what color they need to use
  socket.emit("assigned color", { color: randColor });
  //! Tell everyone in that room that X user has joined the room
  io.to(roomID).emit("new message", {
    user: "SYSTEM",
    color: "grey",
    body: `${user} has entered the room`,
  });
  //! socket.on message from user
    socket.on("chat message", (message) =>{
  //! io.emit chat message
    io.to(roomID). emit("new message", message);
  });
  
  
  //! socket.on disconnect
  socket.on("disconnect", ()=>{
      //! io.emit a user has left the chat
      io.to(roomID).emit("new message", {
        user: "SYSTEM",
        color: "grey",
        body: `${user} has left the room`,
      });
  })
});

server.listen(PORT, () => console.log("Server is up and running!"));
