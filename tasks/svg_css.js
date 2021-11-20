const {
	src,
	dest
} = require('gulp');
const svgmin = require('gulp-svgmin');
const svgCss = require('gulp-svg-css-pseudo');

module.exports = function svg_css() {
	return src('src/svg/css/**/*.svg')
	.pipe(svgmin({
		multipass: true,
		full: true,
		plugins: [
			'removeDoctype',
			'removeComments',
			'sortAttrs',
			'removeUselessStrokeAndFill',
			'removeAttrs',
		],
	}))
	.pipe(svgCss({
			fileName: '_svg',
			fileExt: 'scss',
			cssPrefix: '--svg__',
			addSize: false
		}))
		.pipe(dest('src/scss/global'))
}