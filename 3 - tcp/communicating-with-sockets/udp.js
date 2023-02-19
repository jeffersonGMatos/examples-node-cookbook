const dgram = require("dgram");
const PORT = 3001;

const socket = dgram.createSocket("udp6");
socket.bind(PORT);