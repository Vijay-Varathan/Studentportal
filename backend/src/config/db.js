const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("data","vijay","#Vijay1720",{
    host:"13.205.65.232",
    port:3306,
    dialect:"mysql",
    logging:true
})

module.exports = sequelize;
