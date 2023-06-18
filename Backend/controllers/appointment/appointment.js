const { appointmentsModel }= require("../../mongoModels/appointmentModle");
const { doctorScheduleModel }= require("../../mongoModels/doctorScheduleModel");
const {bookingEmail} = require("../../utils/bookingConfirmedMail");
const {cancelEmail} = require("../../utils/bookingCancel");

const createAppointment = async(req,res)=>{
    try{
        const alreadyBooked = await doctorScheduleModel.find({$and:[{doctorEmail:req.body.doctorEmail},{bookDate:req.body.bookDate},{bookTimeSlot:req.body.bookTimeSlot}]})
        if(alreadyBooked){
            res.status(403).send({isError:true,Msg:`Doctor is already in booked for this time slot`})
        }else{
            let newAppointment = new appointmentsModel(req.body);
            await newAppointment.save();
            let newDoctor = new doctorScheduleModel({
                doctorEmail:req.body.doctorEmail,
                bookDate:req.body.bookDate,
                bookTimeSlot:req.body.bookTimeSlot
            });
            await newDoctor.save();
            const isSended = await bookingEmail(req.body.email,req.body.bookDate,req.body.bookTimeSlot);
            console.log(isSended);
            if(isSended) {
                res.status(202).send({isError:false,Msg:`New appointment Created successfully`})
            }else{
                res.status(500).send({isError:true,Msg:"SendGrid Error"});
            }
        }
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const deleteAppointment = async(req,res)=>{
    try{
        await appointmentsModel.findOneAndDelete({_id:req.params.id})
        const isSended = await cancelEmail(req.body.email,req.body.bookDate,req.body.bookTimeSlot);
        console.log(isSended);
        // if(isSended) {
        //     res.status(202).send({isError:false,Msg:`Appointment Deleted successfully`})
        // }else{
        //     res.status(500).send({isError:true,Msg:"SendGrid Error"});
        // }
        res.status(202).send({isError:false,Msg:`Appointment Deleted successfully`})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const acceptAppointment = async(req,res)=>{
    try{
        await appointmentsModel.findByIdAndUpdate({_id:req.params.id},{status:req.body.status})
        res.status(202).send({isError:false,Msg:`Appointment Accepted successfully`})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const getAppointment = async(req,res)=>{
    try{
        let newAppointment = await appointmentsModel.find({email:req.body.email});
        res.status(202).send({isError:false,Msg:newAppointment})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const getDocAppointment = async(req,res)=>{
    try{
        let newAppointment = await appointmentsModel.find({doctorEmail:req.body.doctorEmail});
        console.log(newAppointment)
        res.status(202).send({isError:false,Msg:newAppointment})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const getAllAppointment = async(req,res)=>{
    try{
        let newAppointment = await appointmentsModel.find();
        res.status(202).send({isError:false,Msg:newAppointment})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const getAllSlots = async(req,res)=>{
    try{
        const alreadyBooked = await doctorScheduleModel.find({$and:[{doctorEmail:req.body.doctorEmail},{bookDate:req.body.bookDate}]})
        res.status(202).send({isError:false,Msg:alreadyBooked})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

module.exports={
    createAppointment,
    deleteAppointment,
    acceptAppointment,
    getAppointment,
    getAllAppointment,
    getDocAppointment,
    getAllSlots
}