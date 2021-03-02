import React from "react";
import StudentHead from "./StudentHead";
import { useHistory, useLocation } from "react-router-dom";
import StuAuth from "../../components/students/StuAuth";

function StudentDashboard() {
  const location = useLocation();
  const history = useHistory();
  //    console.log(location.state.data);
  return (
    <div>
      {StuAuth.getAuth() ? (
        <div>
          <StudentHead data={location.state.data} />
          <h1>welcome {location.state.data}</h1>
          <img src="https://portal.aksuniversity.com/Images/StudentLoginIcon.png" />
        </div>
      ) : (
        history.goBack()
      )}
    </div>
  );
}

export default StudentDashboard;
