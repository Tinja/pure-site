'use strict';

var fs   = require('fs'),
    path = require('path');

var bowerPureDir = path.resolve('bower_components', 'pure'),
    bowerPure    = require(path.join(bowerPureDir, 'bower.json'));

var args          = process.argv,
    isDevelopment = process.env.NODE_ENV !== 'production';

exports.version = bowerPure.version;
exports.modules = ['base', 'grids', 'forms', 'buttons', 'tables', 'menus'];
exports.local   = path.dirname(path.join(bowerPureDir, bowerPure.main));

exports.serveLocally = isDevelopment && args.slice(2).some(function (arg) {
    return arg === '--pure-local';
});
