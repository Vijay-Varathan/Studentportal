const studentmark = require("./mark")
const Student = require("./student")

Student.hasOne(studentmark, {
  foreignKey: "rollno",
  sourceKey: "rollno",
  as: "Marks"
});

studentmark.belongsTo(Student, {
  foreignKey: "rollno",
  targetKey: "rollno",
  as:"Student"
});




module.exports = {studentmark,Student}