import { navigate } from "gatsby";
import React from "react";
import Dashboard from "./dashboard";
import useAuth from "./useAuth";

const AuthSetup = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  window.localStorage.setItem("authCode", code);
  //   window.localStorage.setItem("accessToken", accessToken);
  console.log("AUTHS SETUP");
  console.log(code);
  //   console.log(accessToken);
  navigate("/");

  return <div />;
};

export default AuthSetup;
