// Configurando db usando o arquivo db.config.js
const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorAliases: false
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.avenidas = require('./av.model')(sequelize, Sequelize)

module.exports = db
