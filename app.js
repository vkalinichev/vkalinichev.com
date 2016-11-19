const koa = require( 'koa' )
const serve = require( 'koa-static' )
const app = koa()

const { API_SERVER_PORT } = require( './config' )

app.use( serve( './build' ) )
app.listen( API_SERVER_PORT )

console.log( `listening on port ${ API_SERVER_PORT }` )
