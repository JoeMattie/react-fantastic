import http from 'http';

import wdm from 'webpack-dev-middleware';
import whm from 'webpack-hot-middleware';

import webpack from 'webpack';
import webpackConfig from './webpack.config.dev.js';

import express from 'express';
import favicon from 'serve-favicon';
import compression from 'compression';

import Socketio from 'socket.io';

import socketEventsHandler from './events.js';

const app = express();
const io = new Socketio();

const webpackCompiler = webpack(webpackConfig);
const wdmSettings = { stats: { colors: true }, noInfo: true };

app.use(favicon('public/favicon.ico'));
app.use(express.static('public'));
app.use(compression());

app.use( wdm( webpackCompiler, wdmSettings ) );
app.use( whm( webpackCompiler ) );

const http_port = 8000
const httpServer = http.createServer(app);

io.attach(httpServer);

httpServer.listen( http_port, () => {
    console.log(`http server up on port ${ http_port }`);
});

socketEventsHandler(io);