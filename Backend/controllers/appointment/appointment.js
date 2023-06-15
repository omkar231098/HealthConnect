const { appointmentsModel }= require("../../models/appointmentModle");

const createAppointment = async(req,res)=>{
    try{
        let newAppointment = new appointmentsModel(req.body);
        await newAppointment.save();
        res.status(202).send({isError:false,Msg:`New appointment Created successfully`})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const deleteAppointment = async(req,res)=>{
    try{
        await appointmentsModel.findOneAndDelete({_id:req.params.id})
        res.status(202).send({isError:false,Msg:`Appointment Deleted successfully`})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

const acceptAppointment = async(req,res)=>{
    try{
        await appointmentsModel.findByIdAndUpdate({_id:req.params.id},{status:true})
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

const getAllAppointment = async(req,res)=>{
    try{
        let newAppointment = await appointmentsModel.find();
        res.status(202).send({isError:false,Msg:newAppointment})
    }catch(err){
        res.status(404).send({isError:true,Msg:err})
    }
}

module.exports={
    createAppointment,
    deleteAppointment,
    acceptAppointment,
    getAppointment,
    getAllAppointment
}