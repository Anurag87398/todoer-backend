const Account = require("../models/accountSchema");
const mongoose= require('mongoose');
const taskSchema = require("../models/taskSchema");

const signUp= async(req, res)=>{
    console.log("Received Username: ", req.body.uname);
    console.log("Received Password: ", req.body.pass);

    const matchedAccounts= await Account.find({uname: req.body.uname});
    if(matchedAccounts.length>0){
        res.send("404");
        console.log("User already exists");
    }
    else{      
        try {
            const newUser= new Account({
                uname: req.body.uname,
                pass: req.body.pass
            });
            await newUser.save();
            console.log("User Created!");
            console.log(`Username: ${req.body.uname} Password: ${req.body.pass}`);

            // creating user's collection to store their personal tasks
            const taskSchema2 = new mongoose.Schema(taskSchema, {
                collection: req.body.uname,
              });
            const Task= mongoose.model(req.body.uname, taskSchema2);
            console.log("User's personal collection created!");

            res.send("200");
          } catch (error) {
            console.error('Error creating user:', error);
            res.send("500");
          }
    }
};

const login= async(req, res)=>{
    console.log("Received Username: ", req.body.uname);
    console.log("Received Password: ", req.body.pass);

    const matchedAccounts= await Account.find({uname: req.body.uname});
    if(matchedAccounts.length==0){
        res.send("404-U");
        console.log("Username not found!");
        return;
    }
    if(matchedAccounts[0].pass!=req.body.pass){
        res.send("404-P");
        console.log("Incorrect Password! :'))");
        return;
    }
    else{      
        try {
            res.send("200-L");
            console.log("Login Successfull! (:");
            console.log(`Current User: ${req.body.uname}`);
          } catch (error) {
            console.error('Error creating user:', error);
            res.send("500");
          }
    }
};

module.exports= {
    signUp,
    login,
};