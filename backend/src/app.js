const express = require('express');

const app=express();

//request handlers 

app.get('/user/:userId',(req,res)=>{
    console.log(req.query)
    console.log(req.params)
    res.send({firstName:"chethan",lastName:"gowda"} )
})

app.post('/user',(req,res)=>{
    res.send("data saved succesfullly");

})

app.delete('/user',(req,res)=>{
    res.send("data deleted succesfully")
}) 


app.listen(3000,()=>{
    console.log("server is running in a port 3000");
})
