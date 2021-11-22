const jwt = require('jsonwebtoken');

const verify = (req,res,next) =>{
    const authHeaders = req.headers.token;
    if(authHeaders){
        const token = authHeaders.split(" ")[1];
        jwt.verify(token,process.env.SECRET_TOKEN_KEY,(err,user)=>{
            if(err){
                return res.status(401).send("not a valid token")
            } 
            req.user = user;
            next();
            
        })
    } else{
      return  res.status(401).send("You are not authenticated!");
    }
}

module.exports = verify;