const express = require('express');
const userRouter = express.Router();
const {createUser,getAllUsers,getUsers,updateUser,deleteUser,getToken,forgotPassword,updatePassword} = require("../controllers/user/user");
const {validateUserGoogle,validateUserGithub} = require("../controllers/user/oauth");
const { passport } = require("../utils/googleAuth");
const {authorization} = require("../middlewares/authoriseControler");
const {tokenValidator} = require("../middlewares/tokanValidator");

//all the use statements
userRouter.use(express.json());

//All the defined routes
userRouter.get("/",tokenValidator,getAllUsers);
userRouter.get("/find",tokenValidator,getUsers);
userRouter.post("/reg",createUser);
userRouter.post("/log",getToken);
userRouter.patch("/:id",tokenValidator,authorization,updateUser);
userRouter.delete("/:id",tokenValidator,authorization,deleteUser);
userRouter.post("/forgot",forgotPassword);
userRouter.post("/update",updatePassword);
userRouter.get("/auth/google",passport.authenticate("google", { scope: ["profile", "email"] }));
userRouter.get("/auth/google/callback",passport.authenticate("google", {failureRedirect: "/login",session: false,}),validateUserGoogle);
userRouter.get("/auth/github",(req,res)=>{res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}scope=user:email`)});
userRouter.get("/auth/github/callback",validateUserGithub);
//All export statements
module.exports={
    userRouter
}

