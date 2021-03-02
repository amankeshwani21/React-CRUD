import React from "react";
import "../components/studentdetails.css";

function StudentDetails({ id, name, password, phone, marks }) {
  return (
    <div className="studentdetails">
      <h1>{id}</h1>
      <h2>Name:-{name}</h2>
      <p>Password:-{password}</p>
      <p>Phone:-{phone}</p>
      <p>Marks:-{marks}</p>
    </div>
  );
}

export default StudentDetails;
