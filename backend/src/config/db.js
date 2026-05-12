const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("data","vijay","#Vijay1720",{
    host:"13.201.69.20",
    port:3306,
    dialect:"mysql",
    logging:true
})

module.exports = sequelize;
