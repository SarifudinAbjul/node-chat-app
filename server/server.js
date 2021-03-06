const path = require('path')
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Conected');


    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });

});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

