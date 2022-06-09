const sequelize = require('../config/dbConfig')




















sequelize.sync({force: false}, ()=>{
    console.log('All is Good')
})