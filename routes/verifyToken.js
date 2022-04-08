const jwt = require('jsonwebtoken')


const verifyToken = (req, res,next ) => {
    const authHeader = req.headers.token
    if(authHeader){
       jwt.verify(token, process.env.JWT_SEC, (err, user)=>{
           if(err) res.status(403).json('Token is not valid');
           req.user = user;
           next()
       })
    }else{
        return res.status(401).json('you are not authenticated')
    }
};

const verifyTokenAndAuthorization = (req,res,next) =>{
    verifyToken(req, res, ()=>{
        if(req.user.id === req.params.id){
            next()
        }else {
            res.status(403).json('you are not allowed to do that!')
        }
    });
};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You are not alowed to do that!");
        }
    });
};

module.export = {verifyToken, verifyTokenAndAuthorization };