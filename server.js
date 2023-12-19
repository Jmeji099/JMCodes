const config = require('./config/config');
const app = require('./app');

const port = config.port || 4040;

const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = server;