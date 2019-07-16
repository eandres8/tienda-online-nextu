const express = require('express');
let router = express.Router();
const path = require('path');

router.get('/angular', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../public/shoponline' } );
});


router.get('/react', (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../public/nextu-shop-react' });
});

router.get('/', ( req, res ) => {
    res.send('<h1>Pagina de inicio</h1>');
});

module.exports = router;
