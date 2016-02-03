import gulp    from 'gulp';
import {paths} from '../config';

gulp.task('compile', ['compile:html', 'compile:css', 'compile:js']);
gulp.task('compile:assets', ['compile:assets:images', 'compile:assets:icons']);

gulp.task('compile:html', () => {
    gulp.src(`${paths.sourceRoot}**.html`)
        .pipe(gulp.dest(paths.targetRoot));
});

gulp.task('compile:css', () => {});

gulp.task('compile:js', () => {});

gulp.task('compile:assets:images', () => {});

gulp.task('compile:assets:icons', () => {});
