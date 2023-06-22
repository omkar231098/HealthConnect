// import { Link } from 'react-router-dom'
import React, { useState, useEffect, useContext } from "react";
import { authContext } from "../../Context/AuthContext";
// import Loading from './Loading'


// import { authContext } from "../Context/AuthContext";




function User() {

    const { token, email, refToken } = useContext(authContext);
    const [loading, setLoading] = useState([])
    const [users, setUsers] = useState([])
    const [updateState, setUpdateState] = useState(-1)



    useEffect(() => {

        getdata()
        
    }, [])



    function getdata(){

        fetch(`${process.env.REACT_APP_HOST_URL}user/`,{
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
             setUsers(res.Msg)
            }
        })
        .catch((err)=>{
          console.log(err);
        });

        
    }



    const handleReject = (appointmentId) => {
        
        console.log("insidedelete")
        fetch(`${process.env.REACT_APP_HOST_URL}user/${appointmentId}`, {
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






    var userDetails = "";
    userDetails = users.map((item, index) => {
        return (

            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.createdAt}</td>
                <td>{item.role}</td>
             
                {/* <td>
                    <button  className='btn btn-success edit' onClick={()=> handleEdit(item.id)} type='button'>Edit</button>
                </td> */}
                <td>
                    <button   onClick={() => handleReject(item.id)} className='btn btn-danger delete' type='button' >Delete</button>
                </td>

            </tr>
        )
    })
// function handleEdit(e){
// setUpdateState(id)
// }
// function handleDelete(id){
//     const newUsers = users.filter(li => li.id !== id)
//     setUsers(newUsers)

// }

    return (
        <div className="container">
            
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Users List</h4>
                        </div>
                        <div className="card-body">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Date</th>
                                        {/* <th>Edit</th> */}
                                        <th>Role</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userDetails}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default User;