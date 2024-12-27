const express = require('express');

const app=express();

//request handlers 

app.use("/home",(req,res)=>{
    res.send("welcome to dashBoard .....!");
})
app.use("/test",(req,res)=>{
    res.send("This are the test cases");
})
app.use("/",(req,res)=>{
    res.send("Hi how are you iam chethan");
})

app.listen(3000,()=>{
    console.log("server is running in a port 3000");
})
