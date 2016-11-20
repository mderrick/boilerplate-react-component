var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var pkg = require('./../package.json');
var srcPath = path.resolve(__dirname, 'src');
var distPath = path.resolve(__dirname, 'dist');

module.exports = function(options) {
    var optimize = options.optimize;
    var extractCss = options.extractCss;
    var hot = options.hot;

    var cssString = 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]&-autoprefixer!postcss';
    var config = {
        entry: [
            path.resolve(srcPath, 'entry.js')
        ],
        output: {
            path: distPath,
            filename: '[name].js',
            publicPath: '/'
        },
        resolve: {
            extensions: ['.js', '.json', '.jsx', '']
        },
        module: {
            loaders: [{
                test: /\.(js|jsx)$/,
                include: srcPath,
                loader: 'babel',
                query: {
                    cacheDirectory: true
                }
            }, {
                test: /\.json$/,
                loader: 'json'
            }, {
                test: /\.css$/,
                include: srcPath,
                loader: extractCss
                    ? ExtractTextPlugin.extract('style', cssString)
                    : 'style!' + cssString
            }, {
                test: /\.css$/,
                include: new RegExp(pkg.name + '/dist/'),
                loader: extractCss
                    ? ExtractTextPlugin.extract('style', 'css')
                    : 'style!css'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(srcPath, 'index.html')
            })
        ]
    };

    if (hot) {
        config.entry.unshift(
            'webpack-hot-middleware/client',
            'react-hot-loader/patch'
        );
        config.plugins.unshift(
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        );
    }

    if (extractCss) {
        config.plugins.push(new ExtractTextPlugin('[name].css'));
    }

    if (optimize) {
        config.plugins.push(new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }));
    }

    return config;
};