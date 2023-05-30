const express = require('express');

const PORT = 3000;
const server = express();

server.listen(PORT, () => {
    console.log('Servidor a la espera de órdenes en http://localhost:${PORT}');
})