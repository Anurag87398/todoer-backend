const express= require('express');
const taskSchema = require('../models/taskSchema');
const Account = require('../models/accountSchema');
const { signUp, login } = require('../controllers/verifyingController');
const router= express.Router();
const cors= require('cors');

app.use(cors({
    origin: ["http://localhost:5173", "https://todoer-7jus.onrender.com"],
}));

// USER SIGNUP
router.post('/signUp', signUp);

// USER LOGIN
router.post('/login', login);

module.exports= router;