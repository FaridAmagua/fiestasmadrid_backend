import { Request,Response,NextFunction } from "express";
import  jwt   from "jsonwebtoken";

const validateToken = (req:Request,res:Response,next:NextFunction) => {
    const headerToken = req.headers['authorization']
    console.log('headerToken');

    next()
    if(headerToken != undefined && headerToken.startsWith('Bearer ')){
        //The client token
        const BearerToken = headerToken.slice(7);
        
        try {
            jwt.verify(BearerToken,process.env.NODE_ENV || 'pass1123')
            console.log('bearerToken');
            next()
            
        } catch (error) {
            res.status(401).json({
                msg:'Invalid Token'
            })
        }
        
    }else{
        res.status(401).json({
        msg: 'Access denied'
        })
    }

}

export default validateToken;