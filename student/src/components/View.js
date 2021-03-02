import React, { useState, useEffect } from "react";
import StudentDetails from "./StudentDetails";
import axios from "axios";
import "../components/studentdetails.css";
import Auth from "../components/Auth";
import { useHistory } from "react-router-dom";

function View() {
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("rendering");
    axios.get("http://localhost:8080/getstudent").then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, []);
  return (
    <div>
      {Auth.getAuth() ? (
        <div>
          <div className="container">
            <input
              type="text"
              placeholder="search name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="row">
              {students
                .filter((student) => {
                  if (search === "") {
                    return student;
                  } else if (
                    student.sname.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return student;
                  }
                })
                .map((item, key) => (
                  <div key={item.sid} className="col-lg-4">
                    <StudentDetails
                      id={item.sid}
                      name={item.sname}
                      password={item.password}
                      phone={item.phone}
                      marks={item.marks}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default View;
