const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
    email:{type:String,required:true},
    bookDate:{type:String,required:true},
    bookTimeSlot:{type:Number,Enum:[1,2,3,4,5],required:true},
    status:{type:Boolean,default:false,required:true},
    doctorEmail:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    symptoms:{type:String,required:true}
});

const appointmentsModel = mongoose.model("appointments", appointmentsSchema);

module.exports = { appointmentsModel };