import gulp from 'gulp';
import rename from 'gulp-rename';
import postcss from 'gulp-postcss';
import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import csso from 'postcss-csso';
// import prettier from 'gulp-prettier';

export const styles = () =>
  gulp
    .src(['src/components/components.css'])
    .pipe(postcss([postcssImport, postcssNested, csso]))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('dist/css'));

export const stylesComponents = () =>
  gulp
    .src(['src/components/**/*.css', '!src/components/components.css'])
    .pipe(postcss([postcssImport, postcssNested, csso]))
    .pipe(
      rename({
        dirname: '',
      }),
    )
    // .pipe(prettier())
    .pipe(gulp.dest('dist/css'));

export default gulp.series(gulp.parallel(stylesComponents, styles));
