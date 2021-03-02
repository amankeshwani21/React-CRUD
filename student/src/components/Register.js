import React, { useState } from "react";
import "../components/register.css";
import Auth from "../components/Auth";
import { useHistory } from "react-router-dom";

function Register() {
  const [sid, setSid] = useState("");
  const [sname, setSname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const create = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/addstudent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        sid: sid,
        sname: sname,
        password: password,
        phone: phone,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        alert("succesfully registered..!!");
        setSid("");
        setSname("");
        setPassword("");
        setPhone("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {Auth.getAuth() ? (
        <div className="register">
          <img
            src="https://img.freepik.com/free-photo/teenager-student-girl-yellow-pointing-finger-side_1368-40175.jpg?size=626&ext=jpg"
            alt=""
          />
          <form className="register__form" onSubmit={create}>
            <h2>Student Registration</h2>
            <input
              type="text"
              value={sid}
              onChange={(e) => setSid(e.target.value)}
              placeholder="Enter student id"
            />
            <input
              type="text"
              value={sname}
              onChange={(e) => setSname(e.target.value)}
              placeholder="Enter student name"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter student password"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter student phone"
            />
            <button>Register student</button>
          </form>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default Register;
