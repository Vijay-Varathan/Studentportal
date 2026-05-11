const express = require('express');

const router = express.Router();

const {addStudentmark,getStudentmark,getMarksByRollno,saveMarksByRollno }= require('../controller/mark')






router.post('/',addStudentmark);
router.get('/',getStudentmark);
router.get('/:rollno', getMarksByRollno);    
router.post('/:rollno', saveMarksByRollno);

module.exports = router;