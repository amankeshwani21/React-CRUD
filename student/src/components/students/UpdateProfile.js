import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SaveIcon from "@material-ui/icons/Save";
import StuAuth from "../../components/students/StuAuth";
import "../students/update profile.css";

function UpdateProfile() {
  let { data } = useParams();
  const [sid, setSid] = useState(data);
  const [sName, setSname] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  // console.log(data);
  const update = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/studentprofile", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        accept: "*/*",
      },
      body: JSON.stringify({
        sid: sid,
        sname: sName,
        password: password,
        phone: phone,
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
  };
  return (
    <div>
      {StuAuth.getAuth() ? (
        <div className="updated">
          <img src="https://img.icons8.com/color/452/edit-user-female.png" />
          <h1>your student Id :-{data}</h1>
          <form className="updated__form" onSubmit={update}>
            <input
              type="text"
              value={sName}
              onChange={(e) => setSname(e.target.value)}
              placeholder="Enter Student Name"
            />
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Student password"
            />
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Student phone"
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
        history.push("/studentlogin")
      )}
    </div>
  );
}

export default UpdateProfile;
