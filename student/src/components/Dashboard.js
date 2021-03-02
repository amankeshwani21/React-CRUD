import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import Auth from "../components/Auth";
import Header from "../components/Header";

function Dashboard() {
  const location = useLocation();
  const history = useHistory();

  // console.log(location.state.data);
  return (
    <div>
      {Auth.getAuth() ? (
        <div>
          <Header />
          <h1>welcome Admin</h1>
          <img src="https://lh3.googleusercontent.com/proxy/7k_EMRExoWyBNCSo-VMAHDIL0VmM28-GK3NEbtIOP7V86BFwl1rVGzGYuqz0n6mORVXAC2yxZennkS3X9CpwAAhyxJkPLcVFjYAFicLj4GWt5aWvAupZLeVrDX9owclndxSlTvzH" />
        </div>
      ) : (
        history.goBack()
      )}
    </div>
  );
}

export default Dashboard;
