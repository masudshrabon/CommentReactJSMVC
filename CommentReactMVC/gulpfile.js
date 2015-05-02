var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function () {
    browserify('./CommentReactMVC/CommentApp/jsx/app.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('CommentReactMVC/CommentApp/build/'));
});

gulp.task('watch', function() {
    gulp.watch("CommentReactMVC/CommentApp/**/*.jsx", ["js"])
});

gulp.task('default', ['js', 'watch']);