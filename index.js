const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

server.listen(3000, () => {
    console.log('listening on *:3000');
});
  

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



io.on('connection', (socket) => {
    tes = 'test'
        io.emit( 'userconnect' , tes); 
    

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

});



app.get('/index-copy.html', (req, res) => {
    res.sendFile(__dirname + '/index-copy.html');
});



// io.on('connection', (socket) => {
//     socket.on('chat message', (msg) => {
//       console.log('message: ' + msg);
//     });
// });

// io.on('connection', (socket) => {
//     socket.broadcast.emit('chat message', 'test');
//   });


 io.on ( 'connection' , ( socket ) => { 
   socket.on ( 'chat message' , ( msg ) => { 
    io.emit ( 'chat message' , msg); 
   }); 
 });