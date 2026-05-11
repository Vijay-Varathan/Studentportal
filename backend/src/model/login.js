const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const studentlogin = sequelize.define(
    "studentlogin",{
        id:{
            type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        },
        username:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING
        }
    },{
        tableName:"login_data",
        timestamps:false
    }
)

module.exports = studentlogin;