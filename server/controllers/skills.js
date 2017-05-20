const Skill = require('mongoose').model('Skill');

module.exports = {
	addSkill: (req, res, next) => {
		const skill = new Skill({
			name: 'JavaScript',
			date: 235235325,
			percent: 60
		});

		skill.save(function (err, fluffy) {
			if (err) return console.error(err);
			else console.log('save')
		});
	},
	getSkills: (req, res, next) => {
		Skill.find({}, function(err, docs) {
			if (!err){
				console.log(docs);
				res.send(docs);
				next();
			} else {throw err;}
		});
	}
};