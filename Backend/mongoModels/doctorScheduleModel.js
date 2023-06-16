const mongoose = require("mongoose");

const doctorScheduleSchema = mongoose.Schema({
    doctorEmail:{type:String,required:true},
    bookDate:{type:String,required:true},
    bookTimeSlot:{type:Number,Enum:[1,2,3,4,5],required:true},
});

const doctorScheduleModel = mongoose.model("doctorSchedule", doctorScheduleSchema);

module.exports = { doctorScheduleModel };