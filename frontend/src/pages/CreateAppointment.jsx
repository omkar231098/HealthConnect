import React, { useState } from "react";
import "../Components/Styles/Register.css";
import LeftsidePaitent from "../Dashbord/LeftsidePaitent";
import { Button } from "reactstrap";
import Navbar from "../Components/Basic/Navbar"
import {Link,useParams} from "react-router-dom"
import Calendar from "react-calendar";
import Slot from "./Slots";

export default function CreateAppointment() {
  let { doctor } = useParams();
  const [date, setDate] = useState("");
  const [showSlot, setShowSlot] = useState(false);
  const [info,setInfo] = useState({
    email:"",
    bookDate:date,
    status:false,
    doctorEmail:doctor,
    phoneNumber:0,
    patientName:"",
    symptoms:""
  })
  const onChangeEventUser = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setInfo((prv)=>{
      if(name === "email"){
        return {
          email:value,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:prv.patientName,
          symptoms:prv.symptoms
        }
      }else if(name === "patientName"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:value,
          symptoms:prv.symptoms
        };
      }else if(name === "symptoms"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:prv.phoneNumber,
          patientName:prv.patientName,
          symptoms:value
        };
      }else if(name === "phoneNumber"){
        return {
          email:prv.email,
          bookDate:prv.bookDate,
          status:prv.status,
          doctorEmail:prv.doctorEmail,
          phoneNumber:value,
          patientName:prv.patientName,
          symptoms:prv.symptoms
        };
      }
    })
  };
  const onChange = (date) => {
    console.log(date,"this is set date");
    const dateFormated = new Date(date);
    const formattedDate = dateFormated.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).replace(/\//g, "-");
    let newDate = formattedDate.split("-").reverse().join("-");
    setDate(newDate);
  };
  var pervious = new Date();
  pervious.setDate(pervious.getDate() - 1);

  return (
    <div className="bg-dark" style={{ height: "100vh" }}>
    <Navbar />
      <div>
        <div className="row m-5" style={{ maxWidth: "100%"}}>
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
              <div >
                <input
                style={{
                  backgroundColor: "#ffffff",
                }}
                  type="text"
                  placeholder="Enter Your email"
                  name="email"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                style={{
                  backgroundColor: "#ffffff",
                }}
                  type="number"
                  placeholder="Enter Your Number"
                  name="phoneNumber"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                style={{
                  backgroundColor: "#ffffff",
                }}
                  type="text"
                  placeholder="Enter Your Name"
                  name="patientName"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
                <input
                style={{
                  backgroundColor: "#ffffff",
                }}
                  type="text"
                  placeholder="Enter Your symptoms"
                  name="symptoms"
                  className="register-input"
                  onChange={onChangeEventUser}
                />
              </div>
              <div>
              <Calendar
                tileDisabled={({ date }) =>
                  date.getDay() === 0 || date < pervious
                }
                onChange={onChange}
                value={date}
              />
              {console.log(date)}
                <div className="row justify-content-center mt-5 ml-5">
              <div className="col-2">
                <Link to="/paitentDash">
                  <Button color="danger">GO BACK</Button>
                </Link>
              </div>
              <div className="col-4">
                <Button color="primary" onClick={()=>{
                  console.log(date.length);
                  if(date.length > 11){
                    alert("Please select date")
                  }else{
                    setShowSlot(true)
                  }
                }}>Confirm And Go to Next Step</Button>
              </div>
              </div>
            </div>
            </div>
            <div>{showSlot ? <Slot info= {info} date={date} /> : null}</div>
          </div>
          
        </div>
      </div>
  );
}
