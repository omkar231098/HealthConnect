require("dotenv").config();
const {doctor} = require("../../models/index");
const {sendEmail} = require("../../utils/sendMail")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//doctor can is created this function
const createDoctor = async (req, res) => {
    try{
        console.log(req.body,"inside");
        let olddoctor = await doctor.findOne({ where: { email: req.body.email } });
        console.log(olddoctor);
        if(!olddoctor){
            req.body.password =await bcrypt.hash(req.body.password,2);
            console.log(req.body);
            let newdoctor = await doctor.create({
                ...req.body
            })
            res.status(202).send({isError:false,Msg:newdoctor})
        }else{
            res.status(403).send({isError:true,Msg:"Email is Already Present"})
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
// can find All the doctors from this function
const getAllDoctors = async(req, res) =>{
    try{
        let newdoctor = await doctor.findAll()
        res.status(202).send({isError:false,Msg:newdoctor})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can find specific doctor by providing email address in params
const getDoctors = async(req, res) =>{
    try{
        console.log(req.body.email);
        let newdoctor = await doctor.findAll({ where: { email: req.body.email } })
        res.status(202).send({isError:false,Msg:newdoctor})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can update specific doctor by providing email address in params
const updateDoctor = async (req, res) => {
    try{
        let newdoctor = await doctor.update(
            { ...req.body },
            { where: { id: req.params.id } }
        )
        res.status(202).send({isError:false,Msg:newdoctor})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can delete specific doctor by providing email address in params
const deleteDoctor = async(req, res) => {
    try{
        let newdoctor = await doctor.destroy({
            where : {id:req.params.id}
        })
        res.status(202).send({isError:false,Msg:newdoctor})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//can login in with providing password and email address
const getTokenDoctor = async(req, res) => {
    console.log(req.body);
    try{
        let olddoctor = await doctor.findOne({ where: { email: req.body.email } });
        console.log(olddoctor.password);
        if(!olddoctor){
            res.status(404).send({isError:true,Msg:"doctor not found"})
        }else{
            const isPassCorrect = await bcrypt.compare(req.body.password,olddoctor.password);
            console.log(isPassCorrect);
            if(isPassCorrect){
                const Token = await jwt.sign({name:olddoctor.name,role:olddoctor.role,email:olddoctor.email},process.env.secretKey,{ expiresIn: "1d" });
                const refreshToken = await jwt.sign({name:olddoctor.name,role:olddoctor.role,email:olddoctor.email},process.env.refreshSecretKey,{ expiresIn: "7d" });
                res.cookie("token", Token);
                res.cookie("refreshToken", refreshToken);
                res.status(202).send({isError:false,Msg:"Login Success",token:Token,refreshToken:refreshToken,role:olddoctor.role});
            }else{
                res.status(401).send({isError:true,Msg:"Wrong credentials"})
            }
        }
    }catch(err){
        console.log(err);
        res.status(404).send({isError:true,Msg:err})
    }
}
//forgot password here
const forgotPasswordDoctor = async(req, res) => {
    console.log(req.body);
    try{
        let olddoctor = await doctor.findOne({ where: { email: req.body.email } });
        console.log(olddoctor,"ok");
        console.log(olddoctor.email,olddoctor.otp);
        if(!olddoctor){
            res.status(404).send({isError:true,Msg:"Email not found"})
        }else{
            let o=Math.floor(Math.random() * 1000000);
            console.log(typeof o);
            console.log(olddoctor.email,olddoctor.otp);
            let newdoctor = await doctor.update(
                { otp:o },
                { where: { email:olddoctor.email } }
            )
            const isSended = await sendEmail(olddoctor.email,o,olddoctor.name,res);
            console.log(isSended);
            if(isSended) {
                res.status(202).send({isError:false,Msg:"OTP Sended On Your Email!",newdoctor});
            }else{
                res.status(500).send({isError:true,Msg:"SendGrid Error"});
            }
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//this function is updating password after OTP checking
const updatePasswordDoctor = async(req, res) => {
    try{
        let olddoctor = await doctor.findOne({ where: { email: req.body.email } });
        console.log(olddoctor);
        if(!olddoctor){
            res.status(404).send({isError:true,Msg:"Email not found"})
        }else{
            if(olddoctor.otp === req.body.otp){
                req.body.password = bcrypt.hash(req.body.password,2)
                let newdoctor = await doctor.update(
                    { password:req.body.password },
                    { where: { email:olddoctor.email } }
                )
                res.status(202).send({isError:false,Msg:"Password updated"});
            }else{
                res.status(404).send({isError:true,Msg:"Wrong OTP"})
            }
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}
//All exports statements
module.exports ={
    createDoctor,
    getAllDoctors,
    getDoctors,
    updateDoctor,
    deleteDoctor,
    getTokenDoctor,
    forgotPasswordDoctor,
    updatePasswordDoctor
}