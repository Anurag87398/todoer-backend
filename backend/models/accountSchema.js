const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema(
    {
    uname:{
        type: String,
        required: true, 
        // required: [true, "Please enter a task"] 
    },
    pass:{
        type: String,
        required: true,
    },
    },
    {
        timestamps: true
    }
);

const Account= mongoose.model('accounts', accountSchema);

module.exports= Account;