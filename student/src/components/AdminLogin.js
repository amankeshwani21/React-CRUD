import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../components/admin.css";
import Auth from "../components/Auth";
import { Link } from "react-router-dom";

function AdminLogin() {
  const history = useHistory();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const verifyAdmin = (e) => {
    e.preventDefault();
    console.log(userName);
    console.log(password);
    if (userName === "admin" && password === "Admin@123") {
      Auth.authenticate();
      history.push({
        pathname: "/dashboard",
        state: {
          data: Auth.getAuth(),
        },
      });
    } else {
      alert("plaase enter valid details");
      setUserName("");
      setPassword("");
    }
  };
 
  return (
    <div className="ad">
      <h2><Link to="/studentlogin">Student Login</Link></h2>
    <div className="admin">
    

      <img
        src="https://pramana.gitam.edu/next/portal/login/assets/img/avatar_2x.png"
        alt=""
      />
      <form className="admin__form" onSubmit={verifyAdmin}>
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
    </div>
  );
}

export default AdminLogin;
