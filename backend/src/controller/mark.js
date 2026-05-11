const {Student, studentmark } = require("../model/index");

const addStudentmark = async (req,res) =>{
    try{
        const data = await studentmark.create(req.body);
        return res.status(201).json(data);
    }
    catch(err){
        return res.status(500).json(err);
    }
    
}

const getStudentmark = async (req,res) =>{
    try{
        const data = await Student.findAll(
            {
          include: [{
  model: studentmark,
  required:false,
   as: "Marks",  
}],
attributes: ["name", "std_class"]
        }
        );
        console.log(JSON.stringify(data, null, 2));
        return res.status(200).json(data);
    }
    catch(err){
        return res.status(500).json(err);
    }
}


const getMarksByRollno = async (req, res) => {
  try {
    const { rollno } = req.params;
    const data = await studentmark.findOne({ where: { rollno } });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json(err);
  }
};


const saveMarksByRollno = async (req, res) => {
  try {
    const { rollno } = req.params;
    const existing = await studentmark.findOne({ where: { rollno } });
    if (existing) {
      await existing.update(req.body);
      return res.status(200).json(existing);
    } else {
      const data = await studentmark.create({ ...req.body, rollno });
      return res.status(201).json(data);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { addStudentmark, getStudentmark, getMarksByRollno, saveMarksByRollno };