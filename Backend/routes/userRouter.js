const express = require('express');
const userRouter = express.Router();
const {createUser,getAllUsers,getUsers,updateUser,deleteUser,getToken} = require("../controllers/user/user");

//all the use statements
userRouter.use(express.json());

//All the defined routes
userRouter.get("/",getAllUsers);
userRouter.get("/:id",getUsers);
userRouter.post("/reg",createUser);
userRouter.post("/log",getToken);
userRouter.patch("/:id",updateUser);
userRouter.delete("/:id",deleteUser);

//All export statements
module.exports={
    userRouter
}

