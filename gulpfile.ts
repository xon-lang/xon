/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable no-invalid-this */
import gulp, { dest, src } from 'gulp';
import replace from 'gulp-replace';

gulp.task('default', async () => {
  await src(['dist/**/*.ts'])
    .pipe(
      replace('~', function () {
        const res = this.file.relative
          .split('/')
          .map(() => '..')
          .slice(1)
          .join('/');

        return res;
      }),
    )
    .pipe(dest('dist/'));
});
