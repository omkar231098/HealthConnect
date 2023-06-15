require("dotenv").config();
const jwt = require("jsonwebtoken");

const tokenValidator = async (req, res, next) => {
    ref_token = req.headers?.refresh?.split(" ")[1] || req.cookies.refreshToken;
    token = req.headers?.authorization?.split(" ")[1] || req.cookies.token;
    jwt.verify(token,process.env.secretKey,(e,d)=>{
        if(e){
            jwt.verify(ref_token,process.env.secretKey,(er,dc)=>{
                if(er){
                    res.status(401).send({isError:true,Msg:"Token Error"});
                }else{
                    const Token = jwt.sign({name:dc.name,role:dc.role,email:dc.email},process.env.secretKey,{ expiresIn: "1d" });
                    res.cookie("token", Token);
                    req.body.name = dc.name
                    req.body.role = dc.role
                    req.body.email = dc.email
                    next();
                }
            });
        }else{
            req.body.name = d.name
            req.body.role = d.role
            req.body.email = d.email
            next();
        }
    })
};


module.exports ={
    tokenValidator
}
    

