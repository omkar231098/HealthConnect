import React, { useEffect, useState, useContext } from 'react'
import LeftsidePaitent from "../Dashbord/LeftsidePaitent"
import {authContext} from "../Context/AuthContext";
import { Navigate,Link } from 'react-router-dom';

export default function SearchDoctor() {
  const [doctor,setDoctor] = useState([]);
  const {isAuth,token,refToken,role} = useContext(authContext)
  
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_HOST_URL}doctor/`,{
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization':`Bearer ${token}`,
          'refresh':`Bearer ${refToken}`
      }
      }).then((res)=> res.json()).then((res)=>{
      if(res.isError){
        alert("Something went wrong Please try again")
      }else{
        console.log(res.Msg);
        setDoctor(res.Msg);
      }
  })
  .catch((err)=>{
    console.log(err);
  });
  },[])
  if(!isAuth){
    return < Navigate to="/" />
  }
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
    <h2>Navbar</h2>
    <div>
      <div className="row m-5" style={{ maxWidth: "100%" }}>
        <div className="col-3 col-md-3 p-4 bg-white ">
        <LeftsidePaitent />
        </div>
        <div
          className="col-9 col-md-9 p-4"
          style={{
            border: "15px solid yellow ",
            height: "80vh",
            backgroundColor: "#6c757d",
          }}
        >
          {doctor.map((ele,i)=>(<div className="col-sm-6 mb-2" key={ele._id}>
          <div className="card">
            <div className="card-body">
              <div className="text-info">
                <h6>
                  Doctor Name:
                  <span className="text-uppercase"> {ele.name}</span>
                </h6>
              </div>
              <div>Specialization : {ele.specialization}</div>
              <div>Doctor Email : {ele.email}</div>
              <div className="row mb-0 pb-0">
                <div
                  className=" col align-self-end col-md-2 offset-md-3 inline"
                  style={{ textAlign: "center" }}>
                  <Link to={{ pathname: "/patient/createappointment", doctor: { doctor: ele.email } }}>
                  <button className="btn btn-sm btn-primary">Book</button> </Link>
                </div>
              </div>

              {/* </ListGroupItem> */}
            </div>
          </div>
        </div>))}
        </div>
      </div>
    </div>
  </div>
  )
}
