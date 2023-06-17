import React, {useEffect, useState} from "react";
import Admin from "../../Components/Admin/AdminDash";
import axios from "axios";
import { Table } from "antd";
const Users = () => {
const [users, setUsers] = useState([]);

// getUsers

const getUsers = async () => {
    try {
        const res = await axios.get("/user.getAllUsers", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        
    }
    catch(error){
console.log(error);
    }
};
useEffect(()=> {
    getUsers();
}, []);

// column

const columns = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Email",
        dataIndex: "email",
    },
    {
        title: "isDoctor",
        dataIndex: "isDoctor",
        render: (text, record) => <span>{record.isDoctor}</span>
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (text,record)=> (
            <div className="d-flex">
                <button className="btn btn-danger">Block</button>
            </div>
        ),
    },

];

return (
    <Admin>
        <h1 className="text-center m-2">Users List</h1>
        <Table columns={columns} dataSource={users}></Table>
    </Admin>
       );
};

export default Users;