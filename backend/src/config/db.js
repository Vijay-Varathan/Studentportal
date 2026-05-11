const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("studentportal","root","1720",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    logging:true
})

module.exports = sequelize;