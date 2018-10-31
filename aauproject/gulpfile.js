var gulp         = require('gulp'),  //основной плагин gulp
	stylus       = require('gulp-stylus'),  //препроцессор stylus
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),  //минификация js
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	autoprefixer = require('gulp-autoprefixer');  //расставление автопрефиксов
	imagemin     = require('gulp-imagemin');  //минимизация изображений
	rigger       = require('gulp-rigger');  //работа с инклюдами в html и js
	// pngquant    = require('imagemin-pngquant');


gulp.task('stylus', function() {
	return gulp.src('app/stylus/**/*.styl')
		.pipe(stylus())
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe (gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});


gulp.task('scripts', function() {
	return gulp.src([
		'app/libs/jquery/dist/jquery.min.js',
		'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
	])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('css-libs', ['stylus'], function() {
	return gulp.src('app/css/libs.css')
	.pipe(cssnano())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'));
});


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function() {
	return del.sync('dist');
});

gulp.task('img', function() {
	return gulp.src('app/img/**/*')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		// une: [pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});

// таск для билдинга html
gulp.task('html:dist', function () {
    gulp.src(path.app.include.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.dist.html)) //выгрузим их в папку build
        .pipe(browserSync.reload());  //И перезагрузим наш сервер для обновлений
});

gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function() {
	gulp.watch('app/stylus/**/*.styl', ['stylus']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.html', browserSync.reload);
})



gulp.task('build', ['clean', 'stylus', 'scripts'], function() {
	var buildCss = gulp.src([
		'app/css/main.css',
		'app/css/libs.min.css',
	])
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));

	var buildJs = gulp.src('app/js/**/*')
		.pipe(gulp.dest('dist/js'));

	var buildHtml = gulp.src('app/*.html')
		.pipe(gulp.dest('dist'));

})
