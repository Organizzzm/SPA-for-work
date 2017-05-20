const skillsController = require('../controllers/skills.controller');

module.exports = function (app) {
	/**
	 * Render static file
	 */
	app.get('/', function (req, res) {
		res.sendFile('/dist/index.html');
	});

	/**
	 * API
	 */
	app.get('/api.v=0.1/skills', skillsController.getSkills);
	app.post('/api.v=0.1/skills', skillsController.addSkill);
	app.delete('/api.v=0.1/skills/:id', skillsController.deleteSkill);

	app.get('/api.v=0.1/skills/filter/:id', skillsController.filterSkills);
};