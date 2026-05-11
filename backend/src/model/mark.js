const {DataTypes} = require('sequelize');
const sequelize = require('../config/db')

const studentmark = sequelize.define(
    "studentmark",{
        id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        },
        rollno:{
            type:DataTypes.STRING
        },
        tamil:{
            type:DataTypes.INTEGER
        },
        english:{
            type:DataTypes.INTEGER
        },
        maths:{
            type:DataTypes.INTEGER
        },
        science:{
            type:DataTypes.INTEGER
        },
        social:{
            type:DataTypes.INTEGER
        },
    
    },{
        tableName:"studentmark_data",
        timestamps:false
    }
)

module.exports = studentmark;