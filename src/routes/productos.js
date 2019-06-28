const express = require('express');
let router = express.Router();
const db = require('../db/data.json').productos;

router.get('/productos', (req, res) => {

    res.status(200).json(db);

});

router.get('/productos/:id', (req, res) => {
    let { id } = req.params;
    let product = db.find( p => p.id == id );
    res.status(200).json(product);

});

module.exports = router;
