const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('images', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);