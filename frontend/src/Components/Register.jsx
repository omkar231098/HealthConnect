import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./Styles/Register.css"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Images/Logo.jpeg"
import facebook from "../Images/facebook.png"
import google from "../Images/google.png"
import github from "../Images/github.png"
export default function Register() {


  
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    role: ""
  });

  const handleValidation = () => {
    const { password, username, email,role } = values;
     if (username.length < 3) {
      console.log("userlength ios less", toast)
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    } else if(role === ""){
      toast.error("Select Role.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    console.log(values)
    handleValidation()
    if (handleValidation()) {
      const { email, username, password,role } = values;
      const { data } = await axios.post(`${process.env.REACT_APP_BASEURL}user/reg`, {
        username,
        email,
        password,
        role
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

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
 


  return (
    <div className='Register-container'>
      <form className='register-form' onSubmit={(event) => handleSubmit(event)}>
        <img src={Logo} alt="Logo" className='register-logo'/>
        
        <input
            type="text"
            placeholder="Enter Username"
            name="username"
            className='register-input'
            onChange={(e) => handleChange(e)}
          />
           <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className='register-input'
            onChange={(e) => handleChange(e)}
          />
           <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className='register-input'
            onChange={(e) => handleChange(e)}
          />
          <select className='register-input' name="role" onChange={(e) => handleChange(e)}>
            <option value="">Select Role</option>
            <option value="Doctor">Doctor</option>
            <option value="Patient">Patient</option>
          </select>
          <button type="submit" className='register-btn'>Create User</button>
          <span className='register-span'>
            Already have an account ?<Link to="/login" className="login-link"> Login</Link>
          </span>
          <div className='register-with'>
          <img src={google} alt="google" className='register-auth'/>
          <img src={facebook} alt="facebook" className='register-auth' />
          <img src={github} alt="github" className='register-auth'/>
          </div>
          
      </form>
      <div>
        <img src="https://media3.giphy.com/media/ImDgA5DmScKnzlK1dj/giphy.gif?cid=ecf05e474tf3iaavsvuurged5gvorx9i7989gmy8umabyzmj&ep=v1_gifs_related&rid=giphy.gif&ct=g" alt="register-image"  className='register-image'/>
      </div>
      <ToastContainer />
    </div>
  )
}
