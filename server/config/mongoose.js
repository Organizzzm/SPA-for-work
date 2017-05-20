const mongoose = require('mongoose');
const skill = require('../model/skill');

module.exports = function( config ){
	mongoose.connect( config.db );

	const db = mongoose.connection;

	db.once('open', function(err){
		if(err){
			console.log(err);
			return;
		}
		console.log('Database is connect...');
	});

	db.on('error', function(err){
		console.log(err);
	});

};