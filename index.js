const express = require('express');

const PORT = 3000;
const server = express();

const router = express.Router();
 server.use('/', router)
 
server.listen(PORT, () => {
    console.log('Servidor a la espera de órdenes en http://localhost:${PORT}');
})

router.get('/', (request, response) => {
    return response.send('Servidor funcionando');
})