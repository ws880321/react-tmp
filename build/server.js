const Koa = require('koa');
const app = new Koa();
const webpack = require('webpack');
const serve = require('koa-static');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.server.js');
const compiler = webpack(config);
const devMiddleware = (compiler, opts) => {
    const middleware = webpackDevMiddleware(compiler, opts)
    return async (ctx, next) => {
        await middleware(ctx.req, {
            end: (content) => {
                ctx.body = content
            },
            setHeader: (name, value) => {
                ctx.set(name, value)
            }
        }, next)
    }
}

const webpackHot = require('webpack-hot-middleware')
const PassThrough = require('stream').PassThrough;

const hotMiddleware = (compiler, opts) => {
    const middleware = webpackHot(compiler, opts);
    return async (ctx, next) => {
        let stream = new PassThrough()
        ctx.body = stream
        await middleware(ctx.req, {
            write: stream.write.bind(stream),
            writeHead: (status, headers) => {
                ctx.status = status
                ctx.set(headers)
            }
        }, next)
    }

}


app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler,{
    hot: true,
    host: 'localhost'
}));
app.use(serve(__dirname + "/dist/", { extensions: ['html'] }));

app.listen(3000);



