const env = process.env.NODE_ENV || 'development';

const config = require("./config/config")[env];
const app = require('./config/express')( config.rootPath );
require('./config/mongoose')(config);
require('./route/router')(app, config.rootPath);

app.listen(config.port);
console.log('Listening on port ' + config.port + '...');
