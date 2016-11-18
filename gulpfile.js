const del = require( 'del' )
const gulp = require( 'gulp' )
const path = require( 'path' )
const $if = require( 'gulp-if' )
const pug = require( 'gulp-pug' )
const cssnano = require( 'cssnano' )
const merge = require( 'merge-stream' )
const stylus = require( 'gulp-stylus' )
const svgmin = require( 'gulp-svgmin' )
const rename = require( 'gulp-rename' )
const connect = require( 'gulp-connect' )
const plumber = require( 'gulp-plumber' )
const postcss = require( 'gulp-postcss' )
const imagemin = require( 'gulp-imagemin' )
const sequence = require( 'gulp-sequence' )
const svgstore = require( 'gulp-svgstore' )
const autoprefixer = require( 'autoprefixer' )
const sourcemaps = require( 'gulp-sourcemaps' )
const livereload = require( 'gulp-livereload' )
const spritesmith = require( 'gulp.spritesmith' )

let __prod__ = false

gulp.task( 'default', [ 'build', 'connect', 'watch' ] )

gulp.task( 'prod', sequence( 'set-production-environment', 'build' ) )

gulp.task( 'build', sequence( 'clean', [ 'templates', 'styles' ] ) )

gulp.task( 'clean', function () {
    del( './build/**/*' )
} )

gulp.task( 'set-production-environment', function ( callback ) {
    __prod__ = true
    callback()
} )

gulp.task( 'templates', [ 'icons' ], function () {
    gulp.src( './src/index.pug' )
        .pipe( plumber( console.error ) )
        .pipe( pug( { pretty: !__prod__ } ) )
        .pipe( gulp.dest( './build/' ) )
        .pipe( livereload() )
} )

gulp.task( 'styles', [ 'sprite' ], function () {
    gulp.src( './src/index.styl' )
        .pipe( plumber( console.error ) )
        .pipe( $if( !__prod__, sourcemaps.init() ) )
        .pipe( stylus() )
        .pipe( $if( __prod__, postcss( [ autoprefixer, cssnano ] ) ) )
        .pipe( $if( !__prod__, sourcemaps.write() ) )
        .pipe( gulp.dest( './build/' ) )
} )

gulp.task( 'scripts', function () {
    gulp.src( './src/index.js' )
        .pipe( plumber( console.error ) )
        .pipe( gulp.dest( './build/' ) )
} )

gulp.task( 'icons', function () {
    gulp.src( './src/icons/**/*.svg' )
        .pipe( plumber( console.error ) )
        .pipe( svgmin( function ( file ) {
            const prefix = path.basename( file.relative, path.extname( file.relative ))
            return {
                plugins: [
                    {
                        cleanupIDs: {
                            prefix: prefix + '-',
                            minify: true
                        }
                    },
                    { removeDoctype: true },
                    { removeComments: true }
                ]
            }
        }))
        .pipe( svgstore() )
        .pipe( rename( '.icons.svg' ) )
        .pipe( gulp.dest( './src/icons' ) )
} )

gulp.task( 'images', function () {
    gulp.src( './src/**/*.{gif,png,jpg}' )
        .pipe( plumber( console.error ) )
        .pipe( imagemin() )
        .pipe( gulp.dest( './build/' ) )
} )

gulp.task( 'sprite', function () {
    const spriteConfig = {
        imgName: 'sprite.jpg',
        cssName: '.sprite.styl',
        imgOpts: { quality: 85 },
        algorithm: 'left-right'
    }

    const { img, css } = gulp.src( './src/images/*.png' )
        .pipe( spritesmith( spriteConfig ) )

    return merge(
        img.pipe( gulp.dest( './build' ) ),
        css.pipe( gulp.dest( './src/styles' ) )
    )
} )

gulp.task( 'connect', function () {
    connect.server( {
        root: './build',
        livereload: true
    } )
} )

gulp.task( 'watch', function () {
    gulp.watch( './src/**/*.styl', [ 'styles' ] )
    gulp.watch( './src/**/*.{jade,pug}', [ 'templates' ] )
    gulp.watch( './build/**/*.css', function ( filepath ) {
        livereload.changed( filepath )
    } )
    livereload.listen()
} )

