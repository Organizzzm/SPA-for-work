var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
	entry: {
		'polyfills': helpers.root('src', 'polyfills.ts'),
		'vendor': helpers.root('src', 'vendor.ts'),
		'app': helpers.root('src', 'main.ts')
	},

	resolve: {
		extensions: ['.ts', '.js']
	},

	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					// {
					// 	loader: "@angularclass/hmr-loader"
					// },
					{
						loader: 'awesome-typescript-loader',
						options: {configFileName: helpers.root('src', 'tsconfig.json')}
					},
					'angular2-template-loader',
					'angular-router-loader'
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
				loader: 'file-loader?name=assets/[name].[hash].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: [helpers.root('src', 'app')], //helpers.root('node_modules'),
				loaders: ExtractTextPlugin.extract({
					fallbackLoader: "style-loader",
					loader: "css-loader?sourceMap!sass-loader"
				})
			},
			{
				test: /\.scss$/,
				include: [helpers.root('src', 'app')],
				loaders: ['raw-loader', 'sass-loader?outputStyle=compressed&sourceComments=false']
			}
		]
	},

	plugins: [
		new webpack.ContextReplacementPlugin(
		  /angular(\\|\/)core(\\|\/)@angular/,
		  helpers.root('./src'), {}
		),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	]
};

