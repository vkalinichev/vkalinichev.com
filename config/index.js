const fs = require( 'fs' )
const local = './local'

let config = require( './default' )

if ( fs.existsSync( local ) ) {
    config = Object.assign( {}, config, require( local ) )
}

module.exports = config
