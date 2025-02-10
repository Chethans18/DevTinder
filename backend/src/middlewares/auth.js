

const authMiddleware=(req,res,next)=>{
   console.log( "user auth is getting checked")
    const token ="xyz";
    if(token != "xyz"){
        res.send("unathorized access");
    }
    else{
        next();
    }
}

module.exports=authMiddleware;