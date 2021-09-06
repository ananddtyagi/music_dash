import React, { useEffect } from "react";
import { navigate } from "gatsby";
import Dashboard from "./dashboard";
import Login from "./login";

const Main = () => {
  const code = window.localStorage.getItem("authCode");
  // const accessToken = window.localStorage.getItem("accessToken");
  // if (code === "undefined" || !code) {
  //   navigate("/login");
  //   return <div />;
  // }

  // navigate("/dashboard");
  // return <div />;
  return code ? <Dashboard /> : <Login />;
};

export default Main;
