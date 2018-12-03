import net from 'net'

const serverConfig = {
  host: 'localhost',
  port: '8000',
  exclusive: true
};

const serverRunnig = () => console.log(`Servidor socket corriendo...`);

// Creamos el servidor
const server = net.createServer(socket => {
  socket.on('data', data => {
    console.log(`Recibiendo desde el cliente: ${data.toString()}`);
    socket.write(`Hello ${data.toString()}`);
  })
});

// Cuando ocurra un error en el servidor
server.on('error', () => console.log('Se ha producido un error'));

// Arranque del servidor
server.listen(serverConfig, serverRunnig);
