const express = require('express');

const router = express.Router();


router.get('/', (request, response) => {
    return response.send('Esta es la ruta');
})

router.get('/users', (request, response) => {
    return response.send('300/Users')
})

module.exports = router