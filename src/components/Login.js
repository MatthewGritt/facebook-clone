import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import "./Login.css";
import { useStateValue } from "../StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const login = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"
        alt=""
      />
      <Button onClick={login}>Login With Google</Button>
    </div>
  );
}

export default Login;
