const webpack = require( 'webpack' )

module.exports = {

    resolve: {
        extensions: [ '', '.js' ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json'
            },
            {
                test: /\.(jade|pug)$/,
                exclude: /node_modules/,
                loader: 'pug-html'
            },
            {
                test: /\.eot$/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.woff2?$/,
                exclude: /node_modules/,
                loader: 'url?prefix=font/&limit=5000'
            },
            {
                test: /\.ttf$/,
                exclude: /node_modules/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                // loader: 'url?limit=10000&mimetype=image/svg+xml'
                loader: 'babel!react-svg'
            },
            {
                test: /\.gif/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.jpg/,
                exclude: /node_modules/,
                loader: 'file'
            },
            {
                test: /\.png/,
                exclude: /node_modules/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin( { React: 'react' } )
    ]
}
