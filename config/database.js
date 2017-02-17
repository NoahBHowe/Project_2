// Establish PSQL Database Congifuration
const pgp             = require('pg-promise')();
const connection      = 'postgres://localhost:5432/favorite_gifs';
const database        = pgp(connection);

module.exports        = database;
