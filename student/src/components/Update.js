import React, { useState } from "react";
import "../components/update.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import Auth from "../components/Auth";
import { useHistory } from "react-router-dom";

function Update() {
  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();
  const [marks, setMarks] = useState("");
  const [sid, setSid] = useState("");
  const history = useHistory();

  const update = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/updatestudent", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        sid: sid,
        marks: marks,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("succesfully updated..!!");
    setSid("");
    setMarks("");
  };
  return (
    <div>
      {Auth.getAuth() ? (
        <div className="update">
          <img src="https://docs.cocos.com/creator/manual/en/advanced-topics/hot-update/title.jpg" />
          <form className="update__form" onSubmit={update}>
            <input
              type="text"
              value={sid}
              onChange={(e) => setSid(e.target.value)}
              placeholder="Enter Student Id"
            />
            <input
              type="text"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder="Enter Student Marks"
            />
            <Button
              variant="contained"
              type="subbmit"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              Update
            </Button>
          </form>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}

export default Update;
