const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
	name: String,
	date: Number,
	percent: Number
});

const Skill = mongoose.model('Skill', skillSchema);