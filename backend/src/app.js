const express =require("express");
const connectDB = require('./config/database');
const User = require("./models/user")
const app=express();
// Middleware to parse JSON data
app.use(express.json());

app.post("/signup",async(req,res)=>{
    const userData=req.body;
    const user=new User(userData);
    try{
        await user.save();
        res.send("data saved successfully")
    }
    catch(err){
        res.status(400).send("failed to save data "+err)
    }
})

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server is running in a port 3000");
    })
})
.catch((err)=>{
    console.log(err);
})



