import React, { useState, useEffect, useContext } from 'react'
import LeftsidePaitent from "../Dashbord/LeftsidePaitent"
import { Navigate,Link } from 'react-router-dom';
import {authContext} from "../Context/AuthContext";


export default function Appointments() {
    const [doctor,setDoctor] = useState([]);
    const [isLoading, setIsLoading] = useState()
    const [filteredAppointments, setFilteredAppointments] = useState()
    const {isAuth,token,refToken,role} = useContext(authContext)

    // function getMeetLink(id) {
    //     if (filteredAppointments !== undefined) {
    //         const meetCode = filteredAppointments.find((apntmnt) => {
    //             return apntmnt.id === id
    //         })

    //         return meetCode ? meetCode.hangoutLink : "#"
    //     }
    //     return '#'
    // }
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST_URL}appointments/`,{
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
             {
                doctor.map((el) => {
                     return <div>

                     </div>
                })
             }
            </div>
          </div>
        </div>
      </div>
    )
}
