const { Model} = require('objection');
const Knex = require('knex');
const mysql = require('mysql2');

const knex = Knex({
    client:'mysql2',
    connection:{
        host:'localhost',
        user:'root',
        password:'mysql123',
        database:'knexdb'
    }
});
Model.knex(knex);
module.exports = knex;