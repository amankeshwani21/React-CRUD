import React from "react";
import "../students/studenthead.css";
import { Link } from "react-router-dom";

function StudentHead({data}) {
    console.log();
  return (
    <div className="shead">
      <h2>
       Student Dashboard
      </h2>

      <div className="sheader__links">
        <p>
          <Link to={`/yourprofile/${data}`}>Profile</Link>
        </p>
        <p>
          <Link to={`/updateprofile/${data}`}>Update Profile</Link>
        </p>
      </div>
    </div>
  );
}

export default StudentHead;
