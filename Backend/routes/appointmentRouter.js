const express = require('express');
const appointmentRouter = express.Router();
const {createAppointment,deleteAppointment,acceptAppointment,getAppointment,getAllAppointment,getDocAppointment,getAllSlots} = require("../controllers/appointment/appointment");
const {authorization} = require("../middlewares/authoriseControler");
const {tokenValidator} = require("../middlewares/tokanValidator");

//all the use statements
appointmentRouter.use(express.json());

//All the defined routes
appointmentRouter.get("/",tokenValidator,getAppointment);
appointmentRouter.get("/find",tokenValidator,authorization,getAllAppointment);
appointmentRouter.post("/doc",tokenValidator,getDocAppointment);
appointmentRouter.post("/create",tokenValidator,createAppointment);
appointmentRouter.patch("/accept/:id",tokenValidator,acceptAppointment);
appointmentRouter.post("/getSlots",tokenValidator,getAllSlots);
appointmentRouter.delete("/delete/:id",tokenValidator,deleteAppointment);

//All export statements
module.exports={
    appointmentRouter
}