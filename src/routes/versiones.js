const express = require('express');
let router = express.Router();
const path = require('path');

router.get('/angular', (req, res) => {

    // res.sendFile( __dirname + '/../public/img/aguacate.jpg');
    res.sendFile(path.resolve('src/public/shoponline/index.html'));

});

module.exports = router;
