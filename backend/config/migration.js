const sequelize = require('../config/dbConfig')

const Orpholin  = require('../models/OrphelinModel');
const Orpholinat = require('../models/OrpholinatModel')


Orpholin.belongsTo(Orpholinat)
Orpholinat.hasMany(Orpholin)




sequelize.sync({force: false}, ()=>{
    console.log('All is Good')
})





module.exports = {
    Orpholin,
    Orpholinat
}