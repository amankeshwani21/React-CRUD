import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import StuAuth from "../../components/students/StuAuth";
import "../students/slogin.css";

function Slogin() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const verifyStudent = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/logins", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        sid: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        //   console.log(response);
        StuAuth.authenticate();
        history.push({
          pathname: "/studentdashboard",
          state: {
            data: userName,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="slogin">
       <img
        src="http://www.omitec.org/images/Student1.png"
        alt=""
      />
      <form className="s__form" onSubmit={verifyStudent}>
        <input
          placeholder="username"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Slogin;
