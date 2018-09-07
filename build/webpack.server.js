
const webpack = require('webpack')
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
module.exports = merge(common, {
    entry: [
        "webpack-hot-middleware/client?noInfo=true&reload=true", "./src/index.js"
    ],
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true
    },
    plugins: [
       new webpack.HotModuleReplacementPlugin()//在server下启用
    ]
});