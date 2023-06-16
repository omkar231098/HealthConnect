const express = require('express');
const appointmentRouter = express.Router();
const {createAppointment,deleteAppointment,acceptAppointment,getAppointment,getAllAppointment,getDocAppointment} = require("../controllers/appointment/appointment");
const {authorization} = require("../middlewares/authoriseControler");
const {tokenValidator} = require("../middlewares/tokanValidator");

//all the use statements
appointmentRouter.use(express.json());

//All the defined routes
appointmentRouter.get("/",tokenValidator,getAppointment);
appointmentRouter.get("/find",tokenValidator,authorization,getAllAppointment);
appointmentRouter.get("/doc",tokenValidator,authorization,getDocAppointment);
appointmentRouter.post("/create",tokenValidator,createAppointment);
appointmentRouter.post("/accept",tokenValidator,acceptAppointment);
appointmentRouter.delete("/delete",tokenValidator,deleteAppointment);

//All export statements
module.exports={
    appointmentRouter
}