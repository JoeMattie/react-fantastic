import path from 'path';

import webpack from 'webpack';
const node_modules = path.resolve(__dirname, 'node_modules');
const pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

let config = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        './client/App.jsx'
    ],
    output: {
        path: '/',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.jsx', '.scss', '.js', '.json']
        // alias: { 'react': pathToReact,
        //      'react-dom': path.resolve(node_modules, 'react-dom/dist/react-dom.min.js') }
    },
    module: {
        // noParse: [ pathToReact, path.resolve(node_modules, 'react-dom/dist/react-dom.min.js')],
        loaders: [
            { test: /\.jsx?$/,  loader: 'babel', include: path.resolve(__dirname, 'client') },
            { test: /\.js?$/,   loader: 'babel', include: path.resolve(__dirname, 'client') },
            { test: /\.css$/,   loaders: ['style','css'] },
            { test: /\.scss$/,  loaders: ['style','css', 'sass'] },
            { test: /\.gif$/,   loader: 'url-loader?mimetype=image/png' },
            { test: /\.png$/,   loader: 'url-loader?mimetype=image/png' },
        ]
    }
};

module.exports = config;