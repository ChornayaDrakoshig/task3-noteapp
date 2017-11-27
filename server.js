const io = require('socket.io')();

io.on('connection', (client) => {
  client.on('getNotes', () => {
    console.log('client gets notes');
    client.emit('notes',{fullnotelist: "fisrtnote", sel: 2})    
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);