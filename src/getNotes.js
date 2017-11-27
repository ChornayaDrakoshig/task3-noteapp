import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:8000');
function getNotes(cb) {
   socket.on('notes', nstamp => cb(null, nstamp));
  socket.emit('getNotes'); 
}
export default { getNotes }