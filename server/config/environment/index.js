'use strict';

var path = require('path');
var _ = require('lodash');

console.log('normalized path: ' + path.normalize(__dirname + '/../../..'));

var config = {
    env: process.env.NODE_ENV,
    port: process.env.PORT || 9000,
    root: path.normalize(__dirname + '/../../..')
};

module.exports = _.merge(
    config,
    require('./' + config.env + '.js') || {}
);