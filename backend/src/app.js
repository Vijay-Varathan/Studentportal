const sequelize = require("./config/db")
const express = require('express');
const app = express();
const cors = require('cors')
const studentrouter = require('./route/student')
const markrouter = require('./route/mark')
const loginrouter = require("./route/login")

sequelize.authenticate().then(()=>console.log("database connected")).catch((err)=>console.log(err))
app.use(express.json());
app.listen(3000);
app.use(cors());
app.get('/',(req,res)=>{
    res.send('welcome')
})

app.use("/student",studentrouter);
app.use("/mark",markrouter);
app.use('/login',loginrouter);

module.exports= app;