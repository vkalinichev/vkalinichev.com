const path = require( 'path' )

module.exports = {

    API_SERVER_PORT: 5000,

    DEV_SERVER_PORT: 3333,

    SRC_PATH: path.join( __dirname, '../src' ),
    BUILD_PATH: path.join( __dirname, '../build' )

}
