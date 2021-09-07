import { Link, navigate } from "gatsby";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
var SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({});

const Dashboard = ({ code }) => {
  // const code = window.localStorage.getItem("authCode");

  const accessToken = useAuth(code);

  spotifyApi.setAccessToken(accessToken);

  const getMe = () => {
    spotifyApi.getMe().then(
      function (data) {
        return (
          <div>
            <p>data.body</p>
          </div>
        );
      },
      function (err) {
        console.error(err);
      }
    );
  };

  // spotifyApi.getMe().then(
  //   function (data) {
  //     console.log("Some information about the authenticated user", data.body);
  //   },
  //   function (err) {
  //     console.log("Something went wrong!", err);
  //   }
  // );

  return (
    <div>
      <ul>
        <li>
          <Link to="/visualizer/" state={{ accessToken: accessToken }}>
            Visualizer
          </Link>
        </li>
        <li>
          <Link to="/about/" state={{ accessToken: accessToken }}>
            About the User
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
