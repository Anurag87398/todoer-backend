const mongoose= require('mongoose');

const connectDB= async ()=>{
    // try{
        const connect= await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(()=>{
            console.log("Connected to MongoDB database!");
            // only then starting the server
            
        }).catch((error)=>{
            console.log("Error connecting to MongoDB: ", error);
            // process.exit(1);
        });
    // }
    // catch{

    // }
}

module.exports= connectDB;