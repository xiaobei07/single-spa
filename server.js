const express = require('express')
const path = require('path')
const webpack = require('webpack')
const WebpackDevMiddle = require('webpack-dev-middleware')
const historyHandle = require('connect-history-api-fallback')
const devConfig = require('./config/webpack.dev.config')

const app = express()

const NODE_ENV = process.env.NODE_ENV === 'production' ? 'production' : 'development'
// const NODE_ENV ='development'
console.log('NODE_ENV',NODE_ENV)
app.use(historyHandle())
if(NODE_ENV == 'development') {
    const compiler = webpack(devConfig)
    const devMiddle = WebpackDevMiddle(compiler, {
        publicPath: devConfig.output.publicPath
    })
    app.use(devMiddle)
    const staticPath = path.join(devConfig.output.publicPath, 'static')
    app.use(staticPath, express.static('./static'))
} else if(NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname,'./dist')))
    app.engine('html', require('ejs').renderFile);

    app.get('*', (req,res) => {
        const templateFile = path.resolve(__dirname,'./dist/index.html')
        res.sendFile(templateFile)
    })
}
const port = 3003
app.listen(port,() => {
    console.log(`listening at http://localhost:${port}`)
})
