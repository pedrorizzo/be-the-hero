const kenx = require('knex');
const config = require('../../knexfile');

const connection = kenx(config.development);

module.exports = connection;