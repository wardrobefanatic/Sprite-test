//import a module. the module name is express, and you want to require that u have access to express.
//all of that into a single variable called express, but its a function call.
//require library, create the app, listen on port 3000
var express = require('express');
var app = express();
var server = app.listen(3000);
app.use(express.static('public'));

console.log("My socket server is running!");

//socket.io library
var socket = require('socket.io');
//create a socket that's part of this server
//call socket function, give server as an argument.
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket) {
    //when very new connection is made
    console.log('new connection: ' + socket.id);
    socket.on('mouse', mouseMessage);
}

function mouseMessage(data) {
    socket.broadcast.emit('mouse', data);
    console.log(data);
}