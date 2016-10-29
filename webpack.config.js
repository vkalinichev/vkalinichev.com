const webpackMerge = require( 'webpack-merge' )

const common = require( './config/webpack/webpack.common' )
const dev = require( './config/webpack/webpack.dev' )
const prod = require( './config/webpack/webpack.prod' )

const config = ( process.env.NODE_ENV === 'production' ) ? prod : dev

module.exports = webpackMerge( common, config )
