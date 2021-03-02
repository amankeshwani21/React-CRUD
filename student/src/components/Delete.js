import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import "../components/delete.css";
import Auth from "../components/Auth";
import { useHistory } from "react-router-dom";

function Delete() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [sid, setSid] = useState("");
  const history = useHistory();

  const del = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/deletestudent", {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        sid: sid,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        alert("succesfully deleted..!!");
        setSid("");
      })
      .catch((err) => {
        console.log(err);
      });
    alert("succesfully deleted..!!");
    setSid("");
  };
  return (
    <div>
      {Auth.getAuth() ? (
        <div className="delete">
          <img src="https://helpdeskgeek.com/wp-content/pictures/2019/08/delete-1024x682.png" />
          <form className="delete__form" onSubmit={del}>
            <input
              type="text"
              value={sid}
              onChange={(e) => setSid(e.target.value)}
              placeholder="Enter Student Id"
            />

            <Button
              variant="contained"
              type="submit"
              color="secondary"
              className={classes.button}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
          </form>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default Delete;
