const express = require('express');
let router = express.Router();
const db = require('../db/data.json').productos;

router.get('/products', (req, res) => {

    res.status(200).json(db);

});

module.exports = router;
