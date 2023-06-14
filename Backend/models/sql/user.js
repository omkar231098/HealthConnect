module.exports = (sequelize,Datatype) =>{
    const batch = sequelize.define("user",{
        name:{type:Datatype.STRING,AllowNull:false},
        password:{type:Datatype.STRING,AllowNull:false},
        email:{type:Datatype.STRING,AllowNull:false},
        role:{type:Datatype.STRING,AllowNull:false},
    })
    return batch;
}