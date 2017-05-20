var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
	development: {
		port: 3000,
		rootPath: rootPath,
		db: 'mongodb://localhost/my_database'
	}
};