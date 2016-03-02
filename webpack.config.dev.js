const webpack = require('webpack');

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
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,  loader: 'babel' },
            { test: /\.js?$/,   loader: 'babel' },
            { test: /\.css$/,   loaders: ['style','css'] },
            { test: /\.scss$/,  loaders: ['style','css', 'sass'] },
            { test: /\.gif$/,   loader: 'url-loader?mimetype=image/png' },
            { test: /\.png$/,   loader: 'url-loader?mimetype=image/png' },
        ]
    }
};

module.exports = config;