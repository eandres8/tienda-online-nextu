const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const login = require('./routes/login');
const productos = require('./routes/productos');
const versiones = require('./routes/versiones');

app.use(cors());
// Se sirven archivos estaticos en la carpeta public
app.use(express.static(__dirname + '/public'));
console.log( __dirname + '/public' );
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// opcional { type: 'application/*+json' }
app.use(bodyParser.json());

app.use(login);
app.use(productos);
app.use(versiones);

app.listen(3000, () => {
    console.log(`servidor corriendo en http://localhost:3000`);
} );
