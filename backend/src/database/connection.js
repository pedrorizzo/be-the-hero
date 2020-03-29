const kenx = require('knex');
const config = require('../../knexfile');

const env = process.env.NODE_ENV === 'test' ? config.test : config.development;

const connection = kenx(env);

module.exports = connection;