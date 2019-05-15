const express = require('express');
let router = express.Router();
const db = require('../db/data.json').usuarios;

router.post( '/login', ( req, res ) => {
    let body = req.body;
    let resp = {};

    console.log(">> login");
    console.log(body);

    if ( !body || !body.user || !body.pass ) {
        resp = {
            ok: false,
            message: 'el usuario y la contraseña son necesarios'
        };

        return res.status(400).json(resp);
    }

    let consulta = db.filter( data => body.user == data.usuario && body.pass == data.contrasena );

    if ( consulta.length > 0 ) {
        resp = {
            ok: true,
            message: 'OK'
        };
    } else {
        resp = {
            ok: false,
            message: 'usuario/contraseña incorrectos'
        };
    }

    return res.status(200).json(resp);
} );

module.exports = router;
