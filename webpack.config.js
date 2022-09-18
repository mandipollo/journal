const path = require(`path`);

module.exports = {
	entry: "./src/index.js",

	output: {
		filename: "main.js",
		path: path.resolve(__dirname, `dist`),
	},
	mode: `development`,
	devtool: `inline-source-map`,
	devServer: {
		static: `./dist`,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [`style-loader`, `css-loader`],
			},
			{
				test: /\.(jpg|jpeg|svg|png|gif)$/i,
				type: `asset/resource`,
			},
		],
	},
};
