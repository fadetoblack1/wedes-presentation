import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => {
    runSequence( 'browser-sync', [
        'stylus:default',
        'scripts:default',
        `twig:default`,
        `sprite-svg:default`
    ])
});
