const express =require("express");
const connectDB = require('./config/database');
const User = require("./models/user")
const app=express();

app.post("/signup",async(req,res)=>{
    const userData={
        firstName:"manja",
        lastName:"gowda",
        age:20,
        gender:"female",
        email:"manji@gmail.com",
        password:"manji@123"
    }
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



