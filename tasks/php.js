const {
	src,
	dest
} = require('gulp');
const bs = require('browser-sync');

module.exports = function php() {
	return src('src/**/*.php')
		.pipe(include())
		.pipe(dest('docs'))
		.pipe(bs.stream())
}