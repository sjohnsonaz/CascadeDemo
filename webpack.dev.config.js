var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'main': './scripts/applications/main/main.ts',
        'admin': './scripts/applications/admin/admin.ts',
        'styles': './styles/style.styl',
        'mochaRunner': './mocha/BrowserRunner.ts'
    },
    output: {
        filename: './public/bundle/[name].js',
        libraryTarget: 'var',
        library: '[name]'
    },
    devtool: 'source-map',
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
        new ExtractTextPlugin("./public/bundle/[name].css")
    ],
    postcss: [autoprefixer({
        browsers: ['last 2 versions']
    })]
};
