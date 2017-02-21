// Establish PSQL Database Congifuration
const pgp            = require('pg-promise')();
const connection      = process.env.DATABASE_URL || 'postgres://localhost:5432/ink';
const database        = pgp(connection);

module.exports        = database;
