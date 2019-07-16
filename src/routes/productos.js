const express = require('express');
let router = express.Router();
let db = require('../db/data.json').productos;

router.get('/productos', (req, res) => {

    return res.status(200).json(db);

});

router.post('/productos', ( req, res ) => {
    let { body } = req;

    db = db.map( ( key ) => {
        let aux = body.productos.find(k => k.id == key.id)
        if (aux) {
            let units = key.units - aux.cantidad;
            return { ...key, units };
        }
            
        else 
            return key
    } );

    console.log(db);

    return res.status(200).json({ok:true});
});

router.get('/productos/:id', (req, res) => {
    let { id } = req.params;
    let product = db.find( p => p.id == id );
    return res.status(200).json(product);

});

module.exports = router;
