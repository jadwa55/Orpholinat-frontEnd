const sequelize = require('../config/dbConfig')

const Orpholin  = require('../models/OrphelinModel');
const Orpholinat = require('../models/OrpholinatModel');
const User = require('../models/UserModel')


Orpholin.belongsTo(Orpholinat)
Orpholinat.hasMany(Orpholin)
User.hasMany(Orpholinat)




sequelize.sync({force: false}, ()=>{
    console.log('All is Good')
})





module.exports = {
    Orpholin,
    Orpholinat,
    User
}