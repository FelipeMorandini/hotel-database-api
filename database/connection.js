require('dotenv').config()
const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.db_name, process.env.db_user, process.env.db_password, {
    dialect: 'mysql',
    host: process.env.db_hostname
});

module.exports = db;