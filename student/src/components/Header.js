import React from "react";
import { Link } from "react-router-dom";
import "../components/header.css";
import Auth from "../components/Auth";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  function logout() {
    console.log("here clicked");
    Auth.signout();
    history.push("/");
  }
  return (
    <div className="header">
      <h2>
        <Link to="/dashboard">Admin Dashboard</Link>
      </h2>

      <div className="header__links">
        <p>
          <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/getall">Get All</Link>
        </p>
        <p>
          <Link to="/update">Update</Link>
        </p>
        <p>
          <Link to="/delete">Delete</Link>
        </p>
      </div>
    </div>
  );
}

export default Header;
