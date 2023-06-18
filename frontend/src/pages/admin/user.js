import { Link } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react';
import Loading from './Loading'
import {authContext} from "../../Context/AuthContext";


import axios from 'axios'

function User() {

    const {isAuth,token,email,refToken,role} = useContext(authContext)
    const [loading, setLoading] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
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
    }, [])

    // if(loading){
    //     return (
    //         <div>
    //            <Loading />
    //         </div>
    //     )
    // }



    var userDetails = "";
    userDetails = users.map((item, index) => {
        return (

            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <Link to="/" className='btn btn-success'>Edit</Link>
                </td>
                <td>
                    <Link to="/" className='btn btn-danger'>Delete</Link>
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
                            <h4>Users List</h4>
                        </div>
                        <div className="card-body">
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
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