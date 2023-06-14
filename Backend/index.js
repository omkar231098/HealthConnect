const express = require("express");
const cors = require("cors");
const db = require("./sql/models/index");
const {userRouter} = require("./routes/userRouter");
const app = express();

//All the use statements below
app.use(express.json());
app.use(cors());
//All the routes statements below
app.use("/user",userRouter);


//Siple get method statements
app.get("/",(req,res)=>{
    res.status(200).json({isError:false,msg:"welcome to HealthConnect+ backend server"});
})


//All the databases statements below
db.sequelize.sync().then(()=>{
    app.listen(7890,()=>{
        console.log(`runing on local host ${7890}`)
    })
})