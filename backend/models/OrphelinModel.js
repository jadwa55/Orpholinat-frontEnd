/* -------------------------------------------------------------------------- */
/*                               OrpholinsModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/dbConfig')


class Orpholin extends Model{}


Orpholin.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },

    sexe: {
        type: DataTypes.STRING,
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    situation: {
        type: DataTypes.STRING,
    }
},
{
    sequelize: sequelize,
    modelName: 'Orpholin'
}
)



module.exports = Orpholin;