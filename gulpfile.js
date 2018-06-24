var gulp = require('gulp'), 
watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Hurrah!");
});

gulp.task('html', function() {
    console.log("Imagine...");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });
})