const {DataTypes} = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define(
    "student",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        rollno:{
            type:DataTypes.STRING
        },
        name:{
            type:DataTypes.STRING
        },
        std_class:{
            type:DataTypes.STRING
        },
        email:{
            type:DataTypes.STRING,
            unique:true
        }
    },
    {
        tableName:"student_data",
        timestamps:false
    }
)

 

module.exports = Student;