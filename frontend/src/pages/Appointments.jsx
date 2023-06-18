import React, { useState, useEffect, useContext } from 'react'
import LeftsidePaitent from "../Dashbord/LeftsidePaitent"
import { Navigate,Link } from 'react-router-dom';
import Navbar from "../Components/Basic/Navbar"
import {authContext} from "../Context/AuthContext";


export default function Appointments() {
    const [doctor,setDoctor] = useState([]);
    const [isLoading, setIsLoading] = useState()
    const {isAuth,token,refToken,role} = useContext(authContext)


    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST_URL}appoint`,{
          method: 'GET',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'authorization':`Bearer ${token}`,
              'refresh':`Bearer ${refToken}`
          }
          }).then((res)=> res.json()).then((res)=>{
            console.log(res)
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
        <Navbar />
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
              {doctor.map((ele,i)=>(<div className="col-sm-12 mb-2" key={ele._id}>
              <div className="card">
                <div className="card-body">
                  <div className="text-info">
                    <h6>
                      Doctor Name:
                      <span className="text-uppercase"> {ele.patientName
}</span>
                    </h6>
                  </div>
                  <div>Phone Number : {ele.phoneNumber}</div>
                  <div>Doctor Email : {ele.email}</div>
                  <div className="row mb-0 pb-0">
                    <div
                      className=" col align-self-end col-md-2 offset-md-3 inline"
                      style={{ textAlign: "center" }}>
                      
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
