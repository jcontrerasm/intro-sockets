import net from 'net'

// Creando el socket
const socket = net.Socket();

// Conectandonos al servidor
socket.connect(8000, 'localhost');

// Emitiendo un mensaje al servidor
socket.write('Juan Carlos');

// Escuchando la respuesta del servidor
socket.on('data', data => console.log(data.toString()));
