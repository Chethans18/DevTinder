const express = require('express');
const authMiddleware=require("./middlewares/auth")
const app=express();


app.post('/user/login',(req,res)=>{
    res.send("user logged in successfully")
})

app.use('/user',authMiddleware);

app.get('/user/data',(req,res)=>{
res.send("you can acees the data ")
})
app.get('/user/profile',(req,res)=>{
res.send("this is user profile ")
})

app.listen(3000,()=>{
    console.log("server is running in a port 3000");
})

