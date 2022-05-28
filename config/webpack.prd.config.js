const { merge } = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.base.config')

module.exports = merge(config,{
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            "NODE_ENV": "production"
        })
    ]
})