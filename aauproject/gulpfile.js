const   gulp         = require('gulp'),  //основной плагин gulp
		stylus       = require('gulp-stylus'),  //препроцессор stylus
		browserSync  = require('browser-sync'),
		maps		 = require('gulp-sourcemaps'),
		concat       = require('gulp-concat'), // конкатенация (используется для js)
		uglify       = require('gulp-uglifyjs'),  //минификация js
		csso		 = require('gulp-csso');
		rename       = require('gulp-rename'),
		del          = require('del'),
		autoprefixer = require('gulp-autoprefixer');  //расставление автопрефиксов
		imagemin     = require('gulp-imagemin');  //минимизация изображений
		rigger       = require('gulp-rigger');  //работа с инклюдами в html и js


gulp.task('css', () => {
	return gulp.src('app/stylus/**/*.styl')
		.pipe(maps.init())
		.pipe(stylus())	
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(csso())
		.pipe(rename({
			suffix:'.min'
		}))
		.pipe(maps.write())
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream())
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
	var buildFonts = gulp.src('app/fonts/**/*')
	  .pipe(gulp.dest('dist/fonts'));
  })

gulp.task('html', () => {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
});

gulp.task('js', () => {
	return gulp.src('appp/js/**/*.js')
	  .pipe(gulp.dest('dist/'))
	  .pipe(browserSync.stream())
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

gulp.task('watch', ['reload','css', 'html', 'img', 'fonts', 'js'], () => {
	gulp.watch('app/stylus/**/*.styl', ['css']);
	gulp.watch(['src/*.html'], ['html'])
	gulp.watch('dist/*.html', browserSync.reload)
  });


