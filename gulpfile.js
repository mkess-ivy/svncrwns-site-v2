const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('images', () =>
    gulp.src('dist/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

gulp.task('images-uploads', () =>
    gulp.src('uploads/*')
        .pipe(imagemin())
        .pipe(gulp.dest('uploads'))
);