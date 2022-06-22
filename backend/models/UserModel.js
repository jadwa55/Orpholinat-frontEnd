const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require("../config/DbConfig")
class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    name: {
        type: DataTypes.STRING,
        allowNull: false

    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },

    number: {
        type: DataTypes.STRING,
        allowNull: false
    },

    role: {
        type: DataTypes.ENUM,
        values: ['comptable', 'admin','user'],
        defaultValue: 'user',
    },
},{
    sequelize:sequelize,
    modelName:"User"
})


module.exports = User