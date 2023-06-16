import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Styles/Login.css"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Images/Logo.jpeg"
import facebook from "../Images/facebook.png"
import google from "../Images/google.png"
import github from "../Images/github.png"


export default function Login() {

  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
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
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    validateForm()
    console.log(values)
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(`${process.env.REACT_APP_BASEURL}user/log`, {
        username,
        password,
      });
      if (data.isError === true) {
        toast.error(data.msg, toastOptions);
      }
      if (data.isError === false) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <div className='login-container'>
    <form className='login-form' onSubmit={(event) => handleSubmit(event)}>
      <img src={Logo} alt="Logo" className='login-logo'/>
    
         <input
          type="email"
          placeholder="Enter Email"
          name="email"
          className='login-input'
          onChange={(e) => handleChange(e)}
        />
         <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className='login-input'
          onChange={(e) => handleChange(e)}
        />
        <button type="submit" className='login-btn'>Login</button>
        <span className='login-span'>
          Don't have an account ?<Link to="/register" className="register-link"> Register</Link>
        </span>
        <div className='login-with'>
        <img src={google} alt="google" className='login-auth'/>
        <img src={facebook} alt="facebook" className='login-auth' />
        <img src={github} alt="github" className='login-auth'/>
        </div>
    </form>
    <div>
    <img src="https://i.pinimg.com/originals/13/66/c9/1366c95f8c249b8422d2caaae287cb63.gif" alt="register-image"  className='login-image'/>
    </div>
    <ToastContainer />
  </div>
  )
}
