import { navigate } from "gatsby";
import React from "react";

var AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=bdc7a6b74c5e4b8aa0864c7e4a9e621a&response_type=code&redirect_uri=http://localhost:8000/authSetup/&scope=user-read-currently-playing%20app-remote-control";

const Login = () => {
  console.log("login");
  console.log("first time login");
  // console.log("acces")
  return (
    <div>
      <a href={AUTH_URL}>Login</a>
    </div>
  );
};

export default Login;
