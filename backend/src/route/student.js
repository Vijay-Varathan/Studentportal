

const express = require("express");

const router = express.Router();

const {addStudent,getStudent,updateStudent,deleteStudent} = require('../controller/student');

router.post('/',addStudent);
router.get('/',getStudent);
router.put('/:id',updateStudent);
router.patch("/:id",updateStudent);
router.delete("/:id",deleteStudent);

module.exports = router;