const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('eslint', () => {
  return gulp.src(['**/*.js','!node_modules/**'])
	.pipe(eslint({configFile: './eslintrc.json'}))
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});

gulp.task('default', ['eslint']);
