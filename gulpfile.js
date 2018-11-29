const   gulp         = require('gulp'),  //основной плагин gulp
				stylus       = require('gulp-stylus'),  //препроцессор stylus
				browserSync  	= require('browser-sync'),
				concat       = require('gulp-concat'), // конкатенация (используется для js)
				uglify       = require('gulp-uglifyjs'),  //минификация js
				csso		 = require('gulp-csso'), // минификация css
				rename       = require('gulp-rename'), // используется для переименования конечных файлов css и для изменения конечной структуры проекта
				del          = require('del'), // очистка сборочной директории	
				autoprefixer = require('gulp-autoprefixer'),  //расставление автопрефиксов
				imagemin     = require('gulp-imagemin'),  //минимизация изображений
				fileinclude  = require('gulp-file-include'); // инклюд js и html
				plumber 		=	require('gulp-plumber') // отслеживание ошибок
				watch 			= require('gulp-watch');

gulp.task('css', () => {
	return gulp
		.src([
			'src/common/common-stylus/main.styl',
			'src/pages/**/*.styl',
			'src/libs/**/*.css'
		]) // массив путей
		.pipe(plumber()) // отслеживание ошибок
		.pipe(stylus()) // для препроцессора css - stylus 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
		{ cascade: true })) // для кроссбраузерности
		.pipe(csso()) // минификация css
		.pipe(rename(
			{suffix:'.min', dirname: ''})) // для переименования конечных файлов css и для изменения конечной структуры проекта
		.pipe(gulp.dest('dist/css/')) // сборка проекта с указанием конечной директории
		.pipe(browserSync.reload({
			stream: true})); // отслеживание ошибок в режиме стрима
});

gulp.task('html', () => {
  return gulp
    .src('src/pages/**/*.html')
    .pipe(plumber()) 
		.pipe(fileinclude()) // используется для вставки одного файла формата .html в другой файл аналогичного формата
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
		}) // минификация изображений
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
		'src/pages/**/*.js',
		'src/libs/**/*.js'
		])
		.pipe(plumber())
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('dist/js'))
		.pipe(browserSync.reload({
			stream: true}));
});

gulp.task('reload', () => {
  browserSync({
    server: {
      baseDir: 'dist/' // проект просматривается с директории dist
    },
    notify: false,
  });
});


gulp.task('clean', function() {
	return del.sync('dist'); // очистка конечной директории, в данном случае с dist
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
	watch(['src/common/common-html/*.html', 'src/pages/**/*.html'], () => gulp.start('html'));
	watch(['src/common/common-js/*.js', 'src/pages/**/*.js', 'src/libs/**/*.js'], () => gulp.start('js'));
});

