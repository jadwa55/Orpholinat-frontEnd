const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    'orphome',
    'root',
    null,
    {host: 'localhost', dialect: 'mysql'}
)


  module.exports = sequelize;