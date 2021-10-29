import React from "react";
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import useAuth from "../Hooks/UseAuth";
import UseFirebase from "../Hooks/UseFirebase";

const Login = () => {
  const { signWithGoogle, user, setUser, logOut, isLoading } = useAuth();
  const history = useHistory();
  const location = useLocation();
  const url = location.state?.from || "/home";

  const handlebtn = () => {
    signWithGoogle().then((result) => {
      // setUser(result.user);
      history.push(url);
    });
  };

  return (
    <div>
      <h1>This is a login</h1>

      <Button onClick={handlebtn}> Google</Button>
    </div>
  );
};

export default Login;
