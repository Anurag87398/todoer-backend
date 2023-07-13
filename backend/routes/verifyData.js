const express= require('express');
const taskSchema = require('../models/taskSchema');
const Account = require('../models/accountSchema');
const { signUp, login } = require('../controllers/verifyingController');
const router= express.Router();

// USER SIGNUP
router.post('/signUp', signUp);

// USER LOGIN
router.post('/login', login);

module.exports= router;