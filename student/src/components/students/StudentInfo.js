import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import StuAuth from "../../components/students/StuAuth";
import "../students/studentinfo.css";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";

function StudentInfo() {
  const history = useHistory();
  let { data } = useParams();
  const [student, setStudents] = useState([]);
  useEffect(() => {
    console.log("rendering");
    axios.get(`http://localhost:8080/profile?sid=${data}`).then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, []);
  return (
    <div className="pf">
      <h2>Profile Details</h2>

      {StuAuth.getAuth() ? (
        <div className="prof">
          <div className="profile">
            <h1>student id:-{student.sid}</h1>
            <h3>name:-{student.sname}</h3>
            <h3>Password:-{student.password}</h3>
            <h3>phone:-{student.phone}</h3>
            <h3>marks:-{student.marks}</h3>
          </div>
        </div>
      ) : (
        history.push("/studentlogin")
      )}
    </div>
  );
}

export default StudentInfo;
