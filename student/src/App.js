import React from "react";

import "./App.css";
import AdminLogin from "./components/AdminLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Update from "./components/Update";
import Delete from "./components/Delete";
import Header from "./components/Header";
import View from "./components/View";
import StudentDashboard from "./components/students/StudentDashboard";
import Slogin from "./components/students/Slogin";
import UpdateProfile from "./components/students/UpdateProfile";
import StudentInfo from "./components/students/StudentInfo";
import StudentHead from "./components/students/StudentHead";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/register">
              <Header />
              <Register />
            </Route>
            <Route path="/update">
              <Header />
              <Update />
            </Route>
            <Route path="/delete">
              <Header />
              <Delete />
            </Route>
            <Route path="/getall">
              <Header />
              <View />
            </Route>
            <Route path="/studentlogin">
              <Slogin />
            </Route>
            <Route path="/studentdashboard">
              <StudentDashboard />
            </Route>
            <Route path="/updateprofile/:data">
              <StudentHead />
              <UpdateProfile />
            </Route>
            <Route path="/yourprofile/:data">
              <StudentInfo />
            </Route>
            <Route path="/">
              <AdminLogin />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
