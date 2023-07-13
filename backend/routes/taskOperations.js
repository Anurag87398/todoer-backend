const express= require('express');
const taskSchema = require('../models/taskSchema');
const { addTask, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const router= express.Router();
const cors= require('cors');

router.use(cors({
    origin: ["http://localhost:5173", "https://todoer-7jus.onrender.com"],
}));

// GET ALL TASKS OF A USER
// router.post('/getTasks', async(req,res)=>{
//     console.log(`Current User: ${req.body.uname}`);
    
//     // res.send("Task header received");
//     const collectionName= `${req.body.uname}`;
    
//     try{
//         // const collection = mongoose.connection.collection(collectionName);
//         // console.log(collection);
//         // if (!collection) {
//         //     await mongoose.connection.createCollection(collectionName);
//         //     console.log(`Collection "${collectionName}" created successfully`);
//         //     res.send("200");
//         // } else {
//         //     console.log(`Collection "${collectionName}" already exists`);
//         //     res.send("404");
//         // }
//         const collection = await mongoose.connection.db.listCollections({ name: collectionName }).next();
//         if (collection){
//             res.send("404");
//             console.log(`Collection "${collectionName}" exists`);
//             return;
//         } 
//         else {
//             console.log(`Collection "${collectionName}" does not exist`);
//             const taskCardSchema2 = new mongoose.Schema(taskCardSchema, {
//                 collection: collectionName,
//               });
//             const taskcardModel= mongoose.model(collectionName, taskCardSchema2);
//             res.send("200");
//         }
//     }
//     catch(error){
//         console.error('Error checking collection:', error);
//     }
// });

// ADD A NEW TASK FOR A USER
router.post('/addTask', addTask);

// FETCH ALL TASKS OF A USER
router.post('/getTask', getTask);

// UPDATE STAT OF A TASK
router.post("/updateTask", updateTask);

// DELETE A TASK
router.post("/deleteTask", deleteTask);

module.exports= router;