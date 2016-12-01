const path = require('path');
const pkg = require('./../package.json');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const generateConfig = require('./generateConfig');
const generateComponentConfig = require('./../generateConfig');

const app = express();
const compiler = webpack([
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

app.listen(6060);
