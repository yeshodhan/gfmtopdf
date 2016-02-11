'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

var path = require('path');
var config = require('./config/environment');
var express = require('express');
var app = express();

app.use(express.static(path.join(config.root, 'client')));

require('./routes')(app);

app.listen(config.port, function () {
    console.log('gfm to pdf server started on port: %s', config.port);
});



