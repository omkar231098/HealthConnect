import React, { useState,useContext } from "react";
import "./Styles/Login.css"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Images/Logo.jpeg"
import facebook from "../Images/facebook.png"
import google from "../Images/google.png"
import github from "../Images/github.png"
import {authContext} from "../Context/AuthContext"

export default function Login() {
  const {login,setTokenTo,setEmailTo,setRefTokenTo,setRoleTo} = useContext(authContext)
  const [role,setRole] = useState("user");
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const onChangeEvent = (e)=>{
    const value = e.target.value;
    const name = e.target.name;

    setValues((prv)=>{
      if(name === "email"){
        return {
          email: value,
          password:prv.password
        }
      }else if(name === "password"){
        return {
          email:prv.email,
          password:value
        };
      }
    })
    
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let url = role == "user" ? "user/log" : "doctor/log"
    console.log(values)
    if (validateForm()) {
      fetch(`${process.env.REACT_APP_HOST_URL}${url}`,{
        method :"POST",
        headers :{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(values)
      }).then((res)=> res.json()).then((res)=>{
        console.log(res)
        if(!res.isError){
          console.log(res.Msg);
          login()
          setEmailTo(values.email);
          setTokenTo(res.token);
          setRefTokenTo(res.refreshToken)
          setRoleTo(res.role)
          if(res.role === 'user'){
            navigate("/paitentDash")
          }
           else if (res.role === 'admin' || res.role === 'administrator'){
            navigate("/allAdminData")
          }
          else  {
            navigate("/doctorDash")
          }
         
        }
        else{
          console.log(res.Msg);
          toast.error("Email and Password is Wrong.", toastOptions);
        }
      }).catch((err)=>{
        console.log(err);
        toast.error("Email and Password is Wrong.", toastOptions);
      })
    }
  };

  return (
    <div className='login-container'>
    <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
      <img src={Logo} alt="Logo" className='login-logo' onClick={()=>{
        navigate("/")
      }}/>
      <select className='register-input' name="role" onChange={(e)=>{setRole(e.target.value)}}>
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="user">Patient</option>
        </select>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          className='login-input'
          onChange={onChangeEvent}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className='login-input'
          onChange={onChangeEvent}
        />
        <button type="submit" className='login-btn'>Login</button>
        <span className='login-span'>
          Don't have an account ?<Link to="/register" className="register-link"> Register</Link>
        </span>
        <div className='login-with'>
        <a href="http://localhost:7890/user/auth/google"><img src={google} alt="google" className='login-auth'/></a>
        <a href="http://localhost:7890/user/auth/github"><img src={github} alt="github" className='login-auth' id="login-auth-facebook"/></a>
        </div>
    </form>
    <div>
    <img src="https://i.pinimg.com/originals/13/66/c9/1366c95f8c249b8422d2caaae287cb63.gif" alt="register-image"  className='login-image'/>
    </div>
    <ToastContainer />
  </div>
  )
}
