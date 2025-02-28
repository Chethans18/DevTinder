const  mongoose = require ('mongoose');

const connectDB= async()=>{
    try{
        await mongoose.connect(
            "mongodb+srv://chethans17:AY7c5UNalFXfSlaL@cluster0.bsohv.mongodb.net/Devtinder"
         );  
         console.log("MongoDB Connected successfully ");
    }
    catch(err){
        console.log("Error connecting database",err)
    }
}

module.exports = connectDB; 