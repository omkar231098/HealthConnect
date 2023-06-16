
import Leftside from "../Dashbord/LeftsidePaitent";
import React,{ useState, useEffect,useContext } from "react";
import "../Dashbord/dash.css";
import { authContext } from "../Context/AuthContext"
import { Navigate } from "react-router-dom";

const PersonalDetails = () => {
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(false);
  const { token,email,refToken , role} = useContext(authContext);

 

  useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST_URL}user/find`,{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`,
            'refresh':`Bearer ${refToken}`
        },
        body:JSON.stringify({email:email})
    }).then((res)=> res.json()).then((res)=>{
        if(!res.isError){
            setPatient(res.Msg)
            setLoading(false);
        }
    })
    .catch((err)=>{console.log(err)});
  }, [email,refToken,token]);
  if(role === "doctor"){
    return < Navigate to={"/"}/>
  }
  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
    
      {loading ? (
        <div className="row justify-content-center position-relative">
          <div
            className="spinner-border align-middle d-flex justify-content-center position-absolute top-50 start-50 translate-middle"
            style={{ width: "10rem", height: "10rem" }}
            role="status"
          ></div>
        </div>
      ) : (
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
              <div className="row ">
                <div className="col-9 col-md-9 p-4">
                  <div className="card mb-4">
                    <h4 className="card-header">Personal Details</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Name:
                        </span>
                        {patient.name}
                      </li>
                      <li className="list-group-item">
                        <span className="badge badge-success mr-2 p-2">
                          Email:
                        </span>
                        {patient.email}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default PersonalDetails;

//   <Navbar />
// <div className="col-3 col-md-3 p-4 ">
//                   <img
//                     src={patient.picture}
//                     // className="rounded-circle"

//                     style={{ width: "100%" }}
//                     alt=""
//                   />
//                 </div>