import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Loading from './Loading'

import axios from 'axios'

function User() {
    // const {token} = useContext(authContext)
    const [loading, setLoading] = useState([])
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:7890/user`,{
            headers: {
                Authorization: `Bearer `
              }
        }).then(res => {
            console.log(res)
            setUsers(res.data.users);
            // setLoading(false)
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