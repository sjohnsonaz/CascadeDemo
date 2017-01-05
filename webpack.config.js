var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main': './src/scripts/applications/main.ts',
        'styles': './src/styles/style.styl'
    },
    output: {
        filename: './public/bundle/[name].js',
        libraryTarget: 'var',
        library: '[name]'
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
        }, {
            test: /\.styl$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!stylus-loader')
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!clean-css-loader!postcss-loader')
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("./public/bundle/[name].css")
    ],
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
};
