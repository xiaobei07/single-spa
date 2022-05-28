const path = require('path')
const { merge } = require('webpack-merge')
const config = require('./webpack.base.config')
const webpack = require('webpack')

module.exports = merge(config,{
    mode: 'development',
    plugins: [
       new webpack.DefinePlugin({
           "NODE_ENV": "development"
       })
    ]
})