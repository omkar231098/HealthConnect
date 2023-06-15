const mongoose = require("mongoose");

const appointmentsSchema = mongoose.Schema({
    email:{type:String,required:true},
    bookDate:{type:String,required:true},
    status:{type:Boolean,default:false,required:true},
    doctorEmail:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    symptoms:{type:String,required:true}
});

const appointmentsModel = mongoose.model("appointments", appointmentsSchema);

module.exports = { appointmentsModel };