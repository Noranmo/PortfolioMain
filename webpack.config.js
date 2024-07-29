const path = require('path')

module.exports = {
	entry: './package.json',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.pdf$/i,
				type: 'asset/resource',
				generator: {
					filename: `[name][ext]`,
				},
			},
		],
	},
	mode: 'development',
}
