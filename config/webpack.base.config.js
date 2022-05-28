const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        app: path.resolve(__dirname,'../src/pedestal/entry.js')
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'../dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js','.json'],
        alias: {
            "@": path.join(__dirname,'../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader'],
                exclude: [path.resolve(__dirname,'../node_modules')]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: [path.resolve(__dirname,'../node_modules')]
            },
            {
                test: /\.sty(u?)l$/,
                use: ['style-loader','css-loader','stylus-loader'],
                exclude: [path.resolve(__dirname,'../node_modules')]
            },
            {
                test: /\.(png|jp(e?)g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'img/[name].[hast].[ext]',
                        limit: 1024*10
                    }
                }],
                exclude: [path.resolve(__dirname,'../node_modules')]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
}