const   gulp         = require('gulp'),  //основной плагин gulp
				stylus       = require('gulp-stylus'),  //препроцессор stylus
				browserSync  	= require('browser-sync'),
				concat       = require('gulp-concat'), // конкатенация (используется для js)
				uglify       = require('gulp-uglifyjs'),  //минификация js
				csso		 = require('gulp-csso'), 
				rename       = require('gulp-rename'),
				del          = require('del'),
				autoprefixer = require('gulp-autoprefixer'),  //расставление автопрефиксов
				imagemin     = require('gulp-imagemin'),  //минимизация изображений
				fileinclude  = require('gulp-file-include'); // инклюд js и html
				plumber 		=	require('gulp-plumber')
				watch = require('gulp-watch');

gulp.task('css', () => {
	return gulp
		.src([
			'src/common/common-stylus/main.styl',
			'src/common/common-stylus/components-indextype.styl',
			'src/common/common-stylus/components-accounttype.styl',
			'src/pages/**/*.styl'
		])
		.pipe(plumber())
		.pipe(stylus())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		{ cascade: true }))
		.pipe(csso())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.reload({
			stream: true}));
});

gulp.task('html', () => {
  return gulp
    .src('src/pages/**/*.html')
    .pipe(plumber())
		.pipe(plumber.stop())
		.pipe(fileinclude())
		.pipe(rename({dirname: ''}))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({
			stream: true}));
});

gulp.task('img', () => {
	return gulp.src('src/img/**/*.*')
	.pipe(imagemin([
		imagemin.gifsicle({interlaced: true}),
		imagemin.jpegtran({progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
		  plugins: [
			  {removeViewBox: true},
			  {cleanupIDs: false}
		  ]
		})
	]))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('fonts',() => {
		return gulp.src('src/fonts/**/*')
	  .pipe(gulp.dest('dist/fonts'));
  })

gulp.task('js', () => {
	return gulp.src([
		'src/common/common-js',
		'src/pages/**/*.js'])
		.pipe(plumber())
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true}));
});

gulp.task('reload', () => {
  browserSync({
    server: {
      baseDir: 'dist/'
    },
    notify: false,
  });
});

/* gulp-clean для очистки сборочной директории 
*/
gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('fileinclude', function() {
	gulp.src(['app/**/*.html'])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
			}))
			.pipe(gulp.dest('dist'))
			.pipe(browserSync.reload({
				stream: true}));
	});


gulp.task('watch', ['html','css','js','fileinclude', 'reload'], () => {
	watch(['src/common/common-stylus/**/*.styl', 'src/pages/**/*.styl'], ()  => gulp.start('css'));
	watch(['src/common/common-html', 'src/pages/**/*.html'], () => gulp.start('html'));
});

