const gulp = require( 'gulp' )
const pug = require( 'gulp-pug' )
const cssnano = require( 'cssnano' )
const stylus = require( 'gulp-stylus' )
const connect = require( 'gulp-connect' )
const plumber = require( 'gulp-plumber' )
const postcss = require( 'gulp-postcss' )
const imagemin = require( 'gulp-imagemin' )
const autoprefixer = require( 'autoprefixer' )
const sourcemaps = require( 'gulp-sourcemaps' )
const livereload = require( 'gulp-livereload' )

gulp.task( 'default', [ 'build', 'connect', 'watch' ] )

gulp.task( 'build', [ 'templates', 'styles', 'scripts', 'images' ] )

gulp.task( 'templates', function () {
    gulp.src( './src/index.pug' )
        .pipe( plumber( console.error ) )
        .pipe( pug( { pretty: false } ) )
        .pipe( gulp.dest( './build/' ) )
        .pipe( livereload() )
} )

gulp.task( 'styles', function () {
    gulp.src( './src/index.styl' )
        .pipe( plumber( console.error ) )
        .pipe( sourcemaps.init() )
        .pipe( stylus() )
        .pipe( postcss( [ autoprefixer, cssnano ] ) )
        .pipe( sourcemaps.write() )
        .pipe( gulp.dest( './build/' ) )
} )

gulp.task( 'scripts', function () {
    gulp.src( './src/index.js' )
        .pipe( plumber( console.error ) )
        .pipe( gulp.dest( './build/' ) )
} )

gulp.task( 'images', function () {
    gulp.src( './src/**/*.{gif,png,jpg}' )
        .pipe( plumber( console.error ) )
        .pipe( imagemin() )
        .pipe( gulp.dest( './build/' ) )
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

