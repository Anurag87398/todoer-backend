const mongoose= require('mongoose');
const taskSchema = require("../models/taskSchema");

// FETCH ALL THE TASKS
const getTask= async (req, res)=>{
    try{
        console.log(req.body);
        const collectionName= req.body.uname;
        // creating a model of the required collection
        const TaskModel= mongoose.model('fakeCollectionName', taskSchema, collectionName);
        // fetching tasks
        const tasks= await TaskModel.find({});
        // sending list of all tasks
        res.json(tasks);
        console.log("Task list sent!");
    }
    catch(error){
        console.log(error);
        res.send("500-FT");
    }
};

// ADD A NEW TASK
const addTask= async (req, res)=>{
    try{
        console.log(req.body);
        const collectionName= req.body.uname;
        // creating a model of the required collection
        const TaskModel= mongoose.model('fakeCollectionName', taskSchema, collectionName);
        // adding the received task to this model
        const newTask= new TaskModel({
            task: req.body.task,
            stat: req.body.stat
        });
        await newTask.save();
        console.log("New Task added!");
        res.send("200-TA");
    }
    catch(error){
        res.send("500-TA");
        console.log(error);
    }    
};

// UPDATE STAT OF A TASK
const updateTask= async (req, res)=>{
    try{
        console.log(req.body);
        const collectionName= req.body.uname;
        const taskName= req.body.task;
        const newStat= req.body.stat;
        // creating a model of the required collection
        const TaskModel= mongoose.model('fakeCollectionName', taskSchema, collectionName);
        // updating the received task in the model
        await TaskModel.updateOne({task: taskName},{$set:{stat: newStat}});
        // await newTask.save();
        console.log("Task updated!");
        res.send("200-TU");
        console.log("Sent response");
    }
    catch(error){
        res.send("500-TU");
        console.log(error);
    }
}

// ADD A NEW TASK
const deleteTask= async (req, res)=>{
    try{
        console.log(req.body);
        const collectionName= req.body.uname;
        const taskName= req.body.task;
        // const newStat= req.body.stat;
        // creating a model of the required collection
        const TaskModel= mongoose.model('fakeCollectionName', taskSchema, collectionName);
        // updating the received task in the model
        await TaskModel.deleteOne({task: taskName});
        // await newTask.save();
        console.log("Task deleted!");
        res.send("200-TD");
        console.log("Sent response");
    }
    catch(error){
        res.send("500-TD");
        console.log(error);
    }    
};

module.exports= {
    addTask,
    getTask,
    updateTask,
    deleteTask,
};