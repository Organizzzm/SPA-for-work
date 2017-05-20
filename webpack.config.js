// module.exports = require('./config/webpack.dev.js');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.dev.js');

new WebpackDevServer(webpack(config), {
	contentBase: __dirname,
	inline: true,
	historyApiFallback: true,
	hot: true,
	headers: {'Access-Control-Allow-Origin': '*'},
	stats: {
		color: true
	},
	publicPath: config.output.publicPath,
	proxy: {
		'*': 'http://localhost:3000'
	}
}).listen(8080, 'localhost', function (err, result) {
	if (err) {
		return console.log(err);
	}

	console.log('Listening at http://localhost:8080');
});
