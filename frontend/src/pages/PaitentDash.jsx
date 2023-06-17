
import Leftside from "../Dashbord/LeftsidePaitent";
import React,{ useState, useEffect,useContext } from "react";
import "../Dashbord/dash.css";
import {authContext} from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Basic/Navbar"
const PersonalDetails = () => {
  const navigate = useNavigate();
  const {token,email,refToken,role} = useContext(authContext)
  const [patient, setPatient] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    console.log(JSON.stringify({email:email}));
    fetch(`${process.env.REACT_APP_HOST_URL}user/find`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization':`Bearer ${token}`,
            'refresh':`Bearer ${refToken}`
        },
        body:JSON.stringify({email:email})
    }).then((res)=> res.json()).then((res)=>{
        if(res.isError){
          alert("Something went wrong Please try again")
          navigate("/")
        }else{
          console.log(res);
          console.log(res.Msg);
          setPatient(res.Msg[0])
          setLoading(false);
        }
    })
    .catch((err)=>{
      console.log(err);
    });
  }, []);
  if(role === "doctor"){
    return navigate("/")
  }
  return (
    
    <div className="bg-dark" style={{ height: "100vh" }}>
    <Navbar />
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


