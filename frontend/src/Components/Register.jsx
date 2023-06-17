import React, { useState } from 'react'
import "./Styles/Register.css"
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../Images/Logo.jpeg"
import google from "../Images/google.png"
import github from "../Images/github.png"

export default function Register() {

  const navigate = useNavigate();
  const [role,setRole] = useState("user");
  const [valueuser,setValueUser] = useState({
    name: "",
    email: "",
    password:"",
    role:""
  });
  const [valuedoctor,setValueDoctor] = useState({
    name: "",
    email: "",
    password:"",
    role:"",
    specialization:"",
    degree:"",
    yearOfExperience:""
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };


  const handleValidation = () => {
    
    //  if (name.length < 3) {
    //   console.log("userlength ios less", toast)
    //   toast.error(
    //     "Username should be greater than 3 characters.",
    //     toastOptions
    //   );
    //   return false;
    // } else if (password.length < 8) {
    //   toast.error(
    //     "Password should be equal or greater than 8 characters.",
    //     toastOptions
    //   );
    //   return false;
    // } else if (email === "") {
    //   toast.error("Email is required.", toastOptions);
    //   return false;
    // } else if(role === ""){
    //   toast.error("Select Role.", toastOptions);
    //   return false;
    // }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = role == "user" ? valueuser : valuedoctor
    let url = role == "user" ? "user/reg" : "doctor/reg"
    console.log(data);
    if (handleValidation()) {
      fetch(`${process.env.REACT_APP_HOST_URL}${url}`,{
        method :"POST",
        headers :{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
      }).then((res)=> res.json()).then((res)=>{
        console.log(res)
        if(!res.isError){
          console.log(res.Msg);
          navigate("/login")
        }else{
          console.log(res.Msg);
          toast.error("Something went wrong please try again.", toastOptions);
        }
      }).catch((err)=>{
        console.log(err);
        toast.error("Something went wrong please try again.", toastOptions);
      })
    }else{
      toast.error(
        "Something went wrong please try again.",
        toastOptions
      );
    }
  };

  const onChangeEventUser = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setValueUser((prv)=>{
      if(name === "email"){
        return {
          name: prv.name,
          email: value,
          password:prv.password,
          role:role
        }
      }else if(name === "password"){
        return {
          name: prv.name,
          email:prv.email,
          password:value,
          role:role
        };
      }else if(name === "name"){
        return {
          name: value,
          email:prv.email,
          password:prv.password,
          role:role
        };
      }
    })
  };

  const onChangeEventDoctor = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setValueDoctor((prv)=>{
      if(name === "email"){
        return {
          name: prv.name,
          email: value,
          password:prv.password,
          role:role,
          specialization:prv.specialization,
          degree:prv.degree,
          yearOfExperience:prv.yearOfExperience
        }
      }else if(name === "password"){
        return {
          name: prv.name,
          email: prv.email,
          password:value,
          role:role,
          specialization:prv.specialization,
          degree:prv.degree,
          yearOfExperience:prv.yearOfExperience
        };
      }else if(name === "name"){
        return {
          name: value,
          email: prv.email,
          password:prv.password,
          role:role,
          specialization:prv.specialization,
          degree:prv.degree,
          yearOfExperience:prv.yearOfExperience
        };
      }else if(name == "specialization"){
        return {
          name: prv.name,
          email: prv.email,
          password:prv.password,
          role:role,
          specialization:value,
          degree:prv.degree,
          yearOfExperience:prv.yearOfExperience
        }
      }else if(name == "degree"){
        return {
          name: prv.name,
          email: prv.email,
          password:prv.password,
          role:role,
          specialization:prv.specialization,
          degree:value,
          yearOfExperience:prv.yearOfExperience
        }
      }else if(name == "experience"){
        return {
          name: prv.name,
          email: prv.email,
          password:prv.password,
          role:role,
          specialization:prv.specialization,
          degree:prv.degree,
          yearOfExperience:value
        }
      }
    })
  };


  return (
    <div className='Register-container'>
      <form className='register-form' onSubmit={(event) => handleSubmit(event)}>
        <img src={Logo} alt="Logo" className='register-logo'/>
        <select className='register-input' name="role" onChange={(e)=>{setRole(e.target.value)}}>
            <option value="">Select Role</option>
            <option value="doctor">Doctor</option>
            <option value="user">Patient</option>
        </select>
        {role === 'doctor' ? (
          <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          <input
            type="text"
            placeholder="Enter Your Specialization"
            name="specialization"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          <input
            type="number"
            placeholder="Year Of Experience"
            name="experience"
            className='register-input'
            onChange={onChangeEventDoctor}
          />
          </div>
        ):(
          <div>
          <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          className='register-input'
          onChange={onChangeEventUser}
        />
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          className='register-input'
          onChange={onChangeEventUser}
        />
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          className='register-input'
          onChange={onChangeEventUser}
        />
          </div>
          )}

          <button type="submit" className='register-btn'>Create User</button>
          <span className='register-span'>
            Already have an account ?<Link to="/login" className="login-link"> Login</Link>
          </span>
          <div className='register-with'>
          <img src={google} alt="google" className='register-auth'/>
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
