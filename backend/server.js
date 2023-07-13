// to ensure server.js has access to env file
const dotenv= require('dotenv').config();
const express= require('express');
const connectDB= require('./config/connectDB');
const mongoose= require('mongoose');
const Account = require('./models/accountSchema');
const taskSchema = require('./models/taskSchema');
const taskRoutes= require('./routes/taskOperations');
const verificationRoutes= require('./routes/verifyData'); 
const cors= require('cors');


// const cors = require('cors');

const PORT= process.env.PORT || 8080;
const app= express();

// MIDDLEWARE
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://todoer-7jus.onrender.com"],
}));
app.use("/api", taskRoutes);
app.use("/api", verificationRoutes);
// app.use(express.urlencoded({extended: false}));

// starting the server only when connected to MongoDB
const startServer= async ()=> {
    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`Server running on port ${PORT}`);
        });
    }
    catch(error){
        console.log(error);
    }
}
startServer();

// ROUTES
app.get('/', (req, res)=>{
    res.send("Welcome ji!");
});





