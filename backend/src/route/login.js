const express = require('express');

const router = express.Router();

const loginData = require('../controller/login');


router.post("/",loginData);
module.exports = router;