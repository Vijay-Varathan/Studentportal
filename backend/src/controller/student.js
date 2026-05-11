
const {Student, studentmark} = require("../model/index");
const { Op } = require("sequelize");

console.log(Student)

const addStudent = async (req,res) =>{
    try {
   
        const {Name,Class,RollNo,Email}= req.body
        const existingStudent = await Student.findOne({ where: { email: Email } });
        if (existingStudent) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const addvalue = await  Student.create({
            name:Name,
            std_class:Class,
            rollno:RollNo,
            email:Email

        })

        return res.status(201).json(addvalue);
    }
    catch(err){
          console.log(err)
          return res.status(500).json(err);
    }
}

const getStudent = async(req,res)=>{
    try{
        const getdata = await Student.findAll({
            include:[
                {
                    model:studentmark,
                    as: "Marks"
                }
            ]
        });
        return res.status(200).json(getdata);
    }
    catch(err){
        return res.status(500).json(err);
    }
}

const updateStudent = async(req,res)=>{
    const {Name,Class,RollNo,Email}= req.body
    const id = req.params.id;
    try{
        const existingStudent = await Student.findOne({ 
            where: { 
                email: Email,
                id: { [Op.ne]: id } 
            } 
        });
        if (existingStudent) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const updated = await Student.update({
            name:Name,
            std_class:Class,
            rollno:RollNo,
            email:Email

        },{
            where:{id}
        })
       const data = await Student.findByPk(id);


        return res.json(data);
        
    }
    catch(err){
        return res.status(500).json(err);
    }
}

const deleteStudent = async (req,res) =>{
    const id = req.params.id;
    try{
        const data = await Student.findByPk(id);
        data.destroy();

        return res.status(204).json(data);
    }
    catch(err){
        return res.json(err);
    }
}


module.exports = {addStudent,getStudent,updateStudent,deleteStudent};