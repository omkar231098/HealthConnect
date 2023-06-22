// import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from "react";
// import Loading from './Loading'
import {authContext} from "../../Context/AuthContext";




function Doctor() {
    
    const { token, email, refToken } = useContext(authContext);
    // const [loading, setLoading] = useState([])
    const [doctor, setDoctor] = useState([])
    // const [updateState, setUpdateState] = useState(-1)
    useEffect(() => {
    getdata()

    }, [])


    function getdata(){

        fetch(`${process.env.REACT_APP_HOST_URL}doctor/`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'authorization':`Bearer ${token}`,
                'refresh':`Bearer ${refToken}`
            },
            
        }).then((res)=> res.json()).then((res)=>{
            if(res.isError){
              alert("Something went wrong Please try again")
            
            }else{
                console.log(res)
             setDoctor(res.Msg)
            }
        })
        .catch((err)=>{
          console.log(err);
        });
    }


    const handleReject = (appointmentId) => {
        console.log(appointmentId)
    console.log("insidedelete")
    fetch(`${process.env.REACT_APP_HOST_URL}doctor/${appointmentId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
        'refresh': `Bearer ${refToken}`
      }
    //   body: JSON.stringify({ status: "rejected" })
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        if (!res.isError) {
          getdata()
         
        }
      })
      .catch((err) => {
        console.log(err);
      });

  };



    var doctorDetails = "";
  doctorDetails = doctor.map((item, index) => {
        return (

            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.role}</td>
                <td>{item.specialization}</td>
                <td>{item.degree}</td>
                <td>{item.yearOfExperience}</td>
             
                {/* <td>
                    <button  className='btn btn-success edit' onClick={()=> handleEdit(item.id)} type='button'>Edit</button>
                </td> */}
                <td>
                    <button  className='btn btn-danger delete' onClick={() => handleReject(item.id)} type='button' >Delete</button>
                </td>

            </tr>
        )
    })


    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Doctors List</h4>
                        </div>
                        <div className="card-body">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Specialization</th>
                                        <th>Degree</th>
                                        <th>Experience</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {doctorDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Doctor;