const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
    task:{
        type: String,
        required: true, 
        // required: [true, "Please enter a task"] 
    },
    stat:{
        type: Boolean,
        required: true,
    },
    },
    {
        timestamps: true
    }
);

// const Task= mongoose.model(collectionName, taskSchema);

module.exports= taskSchema;