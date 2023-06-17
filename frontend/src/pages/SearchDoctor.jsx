import React from 'react'
import LeftsidePaitent from "../Dashbord/LeftsidePaitent"

export default function SearchDoctor() {
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
          <h2>Data of searched Doctor</h2>
        </div>
      </div>
    </div>
  </div>
  )
}
