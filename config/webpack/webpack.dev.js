const path = require( 'path' )

const webpack = require( 'webpack' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const OpenBrowserPlugin = require( 'open-browser-webpack-plugin' )

const { API_SERVER, DEV_SERVER: { HOST, PORT }, PATHS: { BUILD, SRC } } = require( '..' )

module.exports = {

    entry: [
        `webpack-dev-server/client?http://${ HOST }:${ PORT }`,
        'webpack/hot/only-dev-server',
        `${ SRC }/app.js`
    ],
    output: {
        path: BUILD,
        filename: '/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: [
                    'style?sourceMap',
                    'css'
                ]
            }, {
                test: /style\.styl$/,
                loaders: [
                    'style?sourceMap',
                    'css',
                    'stylus'
                ]
            }, {
                test: /\.styl$/,
                exclude: /style\.styl$/,
                loaders: [
                    'style?sourceMap',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'stylus'
                ]
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: BUILD,
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin( {
            template: `${ SRC }/index.html`
        } ),
        new OpenBrowserPlugin( { url: `http://${ HOST }:${ PORT }` } )
    ]
}
