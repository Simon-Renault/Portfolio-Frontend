const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');


console.log('heyy');

(async () => {
	const files = await imagemin(['public/images/*/*.{jpg,png}'], 'build/images', {
		plugins: [
			imageminJpegtran({
				quality: [0.4, 0.5]
            }),
			imageminPngquant({
				quality: [0.4, 0.5]
			})
		]
	});

	console.log(files);
	//=> [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
})();