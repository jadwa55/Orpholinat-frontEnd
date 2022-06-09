/* -------------------------------------------------------------------------- */
/*                               OrpholinatsModel                              */
/* -------------------------------------------------------------------------- */

const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/dbConfig')


class Orpholinat extends Model{}


Orpholinat.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    city: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,
    },

    nombreOrpholin: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},
{
    sequelize: sequelize,
    modelName: 'Orpholinat'
}
)



module.exports = Orpholinat;