require("dotenv").config();
const {user} = require("../../sql/models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//user can is created this function
const createUser = async (req, res) => {
    try{
        let oldUser = await user.findAll({ where: { email: req.body.email } });
        console.log(oldUser);
        if(!oldUser){
            req.body.password = bcrypt.hash(req.body.password,2);
            let newUser = await user.create({
                ...req.body
            })
            res.status(202).send({isError:false,Msg:newUser})
        }else{
            res.status(403).send({isError:true,Msg:"Email is Already Present"})
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
// can find All the users from this function
const getAllUsers = async(req, res) =>{
    try{
        let newUser = await user.findAll()
        res.status(202).send({isError:false,Msg:newUser})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can find specific user by providing email address in params
const getUsers = async(req, res) =>{
    try{
        let newUser = await user.findAll({ where: { email: req.params.id } })
        res.status(202).send({isError:false,Msg:newUser})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can update specific user by providing email address in params
const updateUser = async (req, res) => {
    try{
        let newUser = await user.update(
            { ...req.body },
            { where: { id: req.params.id } }
        )
        res.status(202).send({isError:false,Msg:newUser})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can delete specific user by providing email address in params
const deleteUser = async(req, res) => {
    try{
        let newUser = await user.destroy({
            where : {id:req.params.id}
        })
        res.status(202).send({isError:false,Msg:newUser})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can login in with providing password and email address
const getToken = async(req, res) => {
    try{
        let oldUser = await user.findOne({ where: { email: req.body.email } });
        console.log(oldUser);
        if(!oldUser){
            res.status(404).send({isError:true,Msg:"User not found"})
        }else{
            const isPassCorrect = await bcrypt.compare(oldUser.dataValues.password, req.body.password);
            if(isPassCorrect){
                const Token = await jwt.sign({name:oldUser.dataValues.name,role:oldUser.dataValues.role},process.env.secretKey,{ expiresIn: "1d" });
                const refreshToken = await jwt.sign({name:oldUser.dataValues.name,role:oldUser.dataValues.role},process.env.secretKey,{ expiresIn: "7d" });
                res.status(202).send({isError:false,Msg:"Login Success",token:Token,refreshToken:refreshToken});
            }else{
                res.status(401).send({isError:true,Msg:"Wrong credentials"})
            }
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//All exports statements
module.exports ={
    createUser,
    getAllUsers,
    getUsers,
    updateUser,
    deleteUser,
    getToken
}