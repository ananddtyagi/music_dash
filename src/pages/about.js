import React, { useEffect, useState } from "react";
var SpotifyWebApi = require("spotify-web-api-node");

var spotifyApi = new SpotifyWebApi({});

const About = ({ location }) => {
  console.log(location);
  spotifyApi.setAccessToken(location.state.accessToken);

  const [name, setName] = useState("");
  const [nowPlaying, setNowPlaying] = useState("Nothing currently playing");

  useEffect(() => {
    spotifyApi.getMe().then(
      function (data) {
        console.log("Some information about the authenticated user", data.body);
        setName(data.body.display_name);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  });

  useEffect(() => {
    spotifyApi.getMyCurrentPlayingTrack().then(
      function (data) {
        console.log("Now playing: ", data.item);
        if (data.body == null) return;
        setNowPlaying(data.body.item.name);
      },
      function (err) {
        console.log("Something went wrong!", err);
      }
    );
  });

  return (
    <div>
      <p>User Name: {name}</p>
      <p>Now Playing: {nowPlaying}</p>
    </div>
  );
};

export default About;
