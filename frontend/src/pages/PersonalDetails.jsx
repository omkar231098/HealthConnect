// import React, { useContext, useMemo } from "react";
import Navbar from "../Components/Basic/Navbar";
import Leftside from "../Dashbord/LeftsideDoctor";
import Footer from "../Components/Basic/Footer";
import {authContext} from "../Context/AuthContext";
// import jwt_decode from "jwt-decode";

import "../Dashbord/dash.css";
import { useState,useEffect,useContext } from "react";
// import { authContext } from "../Context/AuthContext"

const PersonalDetails = () => {
  const {email,token,refToken} = useContext(authContext)
  const [data,setData] = useState({});
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST_URL}doctor/find/${email}`,{
      method :"GET",
      headers :{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization':`Bearer ${token}`,
        'refresh':`Bearer ${refToken}`
      },
    }).then((res)=> res.json()).then((res)=>{
      console.log(res)
      if(!res.isError){
        console.log(res.Msg);
        setData(res.Msg[0])
      }else{
        console.log(res.Msg);
        alert("Something went wrong please try again.");
      }
    }).catch((err)=>{
      console.log(err);
      alert("Something went wrong please try again.")
    })
  },[])

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
      <Navbar />
      <div>
      
        <div className="row m-5" style={{ maxWidth: "100%" }}>
       
          <div
            className="col-3 col-md-3 p-4 bg-white "
            style={{ height: "80vh" }}
          >
            <Leftside />
          </div>
          <div
            className="col-9 col-md-9 p-4"
            style={{
              border: "15px solid yellow ",
              height: "80vh",
              backgroundColor: "#6c757d",
            }}
          >
            <div className="card mb-4">
              <h4 className="card-header">Personal Details</h4>
              <ul className="list-group">
                <li className="list-group-item">
                  <span className="badge badge-info mr-2 p-2 text-uppercase ">
                    Name:
                  </span>
                  <span className="text-uppercase">{data.name}</span>
                </li>
                <li className="list-group-item">
                  <span className="badge badge-info mr-2 p-2 text-uppercase">
                    Specialization:
                  </span>
                  <span className="text-capitalize">
                    {data.specialization}
                  </span>
                </li>
                <li className="list-group-item">
                  <span className="badge badge-info mr-2 p-2 text-uppercase">
                    Email:
                  </span>
                  {data.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default PersonalDetails;
