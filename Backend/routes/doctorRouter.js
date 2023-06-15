const express = require('express');
const doctorRouter = express.Router();
const { createDoctor,getAllDoctors,getDoctors,updateDoctor,deleteDoctor,getTokenDoctor,forgotPasswordDoctor,updatePasswordDoctor } = require("../controllers/doctor/doctor");
const {authorization} = require("../middlewares/authoriseControler");
const {tokenValidator} = require("../middlewares/tokanValidator");

//all the use statements
doctorRouter.use(express.json());

//All the defined routes
doctorRouter.get("/",tokenValidator,getAllDoctors);
doctorRouter.get("/find/:id",tokenValidator,getDoctors);
doctorRouter.post("/reg",createDoctor);
doctorRouter.post("/log",getTokenDoctor);
doctorRouter.patch("/:id",tokenValidator,authorization,updateDoctor);
doctorRouter.delete("/:id",tokenValidator,authorization,deleteDoctor);
doctorRouter.post("/forgot",forgotPasswordDoctor);
doctorRouter.post("/update",updatePasswordDoctor);
//All export statements
module.exports={
    doctorRouter
}