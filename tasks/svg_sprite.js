const {
	src,
	dest
} = require('gulp');
const svgmin = require('gulp-svgmin');
const sprite = require('gulp-svg-sprite');

module.exports = function svg_sprite() {
	return src('src/svg/**/*.svg')
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
		.pipe(sprite({
			mode: {
				stack: {
					sprite: '../sprite.svg'
				}
			}
		}))
		.pipe(dest('src/img'))
}