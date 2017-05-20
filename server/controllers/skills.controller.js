const Skill = require('mongoose').model('Skill');

module.exports = {
	addSkill: (req, res, next) => {
		const skill = new Skill(req.body);
console.log(skill);
		skill.save(function (err, skill) {
			if (err) return console.error(err);
			else {
				res.send(skill);
				next();
			}
		});
	},
	getSkills: (req, res, next) => {
		Skill.find({}, function (err, skills) {
			if (!err) {
				res.send(skills);
				next();
			} else {
				throw err;
			}
		});
	},
	deleteSkill: (req, res, next) => {
		const id = req.params.id;

		Skill.findOneAndRemove({_id: id}, (err, skill) => {
			if (!err) {
				res.send(skill);
				next();
			} else {
				throw err;
			}
		});
	}
};