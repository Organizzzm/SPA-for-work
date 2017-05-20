const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
	technology: String,
	date: Number,
	skills: Number
});

const Skill = mongoose.model('Skill', skillSchema);