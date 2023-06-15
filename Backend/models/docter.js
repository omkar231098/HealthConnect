
module.exports = (sequelize,Datatype) =>{
    const doctor = sequelize.define("doctor",{
        name:{type:Datatype.STRING,AllowNull:false},
        password:{type:Datatype.STRING,AllowNull:false},
        email:{type:Datatype.STRING,AllowNull:false},
        role:{type:Datatype.ENUM('doctor'),AllowNull:false},
        otp:{type:Datatype.INTEGER,AllowNull:true},
        avatar:{type:Datatype.STRING,AllowNull:true},
        specialization:{type:Datatype.STRING,AllowNull:false},
        degree:{type:Datatype.STRING,AllowNull:false},
        yearOfExperience:{type:Datatype.STRING,AllowNull:false}
    })
    return doctor;
}