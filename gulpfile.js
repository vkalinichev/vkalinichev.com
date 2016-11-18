const del = require( 'del' )
const gulp = require( 'gulp' )
const pug = require( 'gulp-pug' )
const cssnano = require( 'cssnano' )
const merge = require( 'merge-stream' )
const stylus = require( 'gulp-stylus' )
const connect = require( 'gulp-connect' )
const plumber = require( 'gulp-plumber' )
const postcss = require( 'gulp-postcss' )
const imagemin = require( 'gulp-imagemin' )
const autoprefixer = require( 'autoprefixer' )
const sourcemaps = require( 'gulp-sourcemaps' )
const livereload = require( 'gulp-livereload' )
const spritesmith = require( 'gulp.spritesmith' )
const sequence = require( 'gulp-sequence' )

gulp.task( 'default', [ 'build', 'connect', 'watch' ] )

gulp.task( 'build', sequence( 'clean', [ 'templates', 'styles', 'scripts' ] ) )

gulp.task( 'clean', function () {
    del( './build/**/*' )
} )

gulp.task( 'templates', function () {
    gulp.src( './src/index.pug' )
        .pipe( plumber( console.error ) )
        .pipe( pug( { pretty: false } ) )
        .pipe( gulp.dest( './build/' ) )
        .pipe( livereload() )
} )

gulp.task( 'styles', [ 'sprite' ], function () {
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

gulp.task( 'sprite', function () {
    const spriteData = gulp.src( './src/images/*.png' )
        .pipe( spritesmith( {
            imgName: 'sprite.jpg',
            cssName: '.sprite.styl',
            imgOpts: { quality: 85 },
            algorithm: 'left-right'
        } ) )

    const imgStream = spriteData.img
        .pipe( gulp.dest( './build' ) )

    const stylStream = spriteData.css
        .pipe( gulp.dest( './src/styles' ) )

    return merge( imgStream, stylStream )
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

