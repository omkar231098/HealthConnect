module.exports = (sequelize,Datatype) =>{
    const user = sequelize.define("user",{
        name:{type:Datatype.STRING,AllowNull:false},
        password:{type:Datatype.STRING,AllowNull:false},
        email:{type:Datatype.STRING,AllowNull:false},
        role:{type:Datatype.ENUM('user'),AllowNull:false},
        otp:{type:Datatype.INTEGER,AllowNull:true}
    })
    return user;
}