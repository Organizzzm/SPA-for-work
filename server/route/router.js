const skillsController = require('../controllers/skills');

module.exports = function (app, __dirname) {
	/**
	 * Render static file
	 */
	app.get('/', function (req, res) {
		res.sendFile('/dist/index.html');
	});

	/**
	 * API
	 */
	app.get('/skills', skillsController.getSkills);
};