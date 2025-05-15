import jwt from 'jsonwebtoken'

const userAuth = async(req, res, next) =>{
    const {token} = req.headers;

    if(!token){
        return res.json({success:"Login Again"});
    }
    try {
        const tokenDecode = jwt.verify(token,process.env.JWT_SECRET);

        if(tokenDecode.id){
            if(!req.body) req.body = {};  //need to check is it available or not
            req.body.userId = tokenDecode.id;
            next();
        }else{
            return res.json({success:false, message:'Not Authorized. Login Again'});
        }
    } catch (error) {
        res.json({success:false, message:error.message});
    }
}

export default userAuth;