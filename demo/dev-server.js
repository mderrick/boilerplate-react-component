var path = require('path');
var pkg = require('./../package.json');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var generateConfig = require('./generateConfig');
var generateComponentConfig = require('./../generateConfig');

var app = express();
var compiler = webpack([
    generateComponentConfig({
        // Build the component library into node_modules
        // so we need not do a symlink for development.
        outputPath: path.resolve(__dirname, 'node_modules/' + pkg.name + '/dist')
    }),
    generateConfig({
        hot: true,
        optimize: false,
        extractCss: false
    })
]);
compiler.compilers[0].watch({}, function(err) {
    if (err) {
        throw err;
    }
});
app.use(webpackDevMiddleware(compiler.compilers[1]));
app.use(webpackHotMiddleware(compiler.compilers[1]));

app.listen(3000);
