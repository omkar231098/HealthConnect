require("dotenv").config();
const express = require("express");
const cors = require("cors");
const http = require('http');
const {Server} = require('socket.io');
const cookieParser = require("cookie-parser");
const db = require("./models/index");
const {connection} = require("./config/db")
const {userRouter} = require("./routes/userRouter");
const {doctorRouter} = require("./routes/doctorRouter");
const {appointmentRouter} = require("./routes/appointmentRouter");
const app = express();

//All the use statements below
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(cors({
    origin: '*'
}))

//Http server

//All the routes statements below
app.use("/user",userRouter);
app.use("/doctor",doctorRouter);
app.use("/appoint",appointmentRouter);

//Web socket server


//Siple get method statements
app.get("/",(req,res)=>{
    res.status(200).json({isError:false,msg:"welcome to HealthConnect+ backend server"});
})


//All the databases statements below
db.sequelize.sync().then(()=>{
    app.listen(process.env.PORT , async() => {
        try {
            await connection;
            console.log(`connected to DB`);
        } catch (error) {
            console.log(error);
        }
        console.log(`Server started at ${process.env.PORT}`);
    })
})