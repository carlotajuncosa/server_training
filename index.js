const express = require('express');
const PORT = 3000;
const server = express();

const usersRoutes = require('./src/api/users/users.routes');

 server.use('/', usersRoutes)

server.listen(PORT, () => {
    console.log('Servidor a la espera de órdenes en http://localhost:${PORT}');
})



