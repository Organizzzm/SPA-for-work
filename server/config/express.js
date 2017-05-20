const express = require('express');
const app = express(),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override');

module.exports = function( __dirname ){
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	app.use(methodOverride('X-HTTP-Method-Override', 'DELETE'));
	app.use(express.static( __dirname + '/dist' ));

	return app;
};