const express = require('express');
const app = express();

app.use('/api/v1', require('./login'));
app.use('/api/v1', require('./productos'));
app.use('/', require('./versiones'));

module.exports = app;