import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../redux/action";

const client_id = "d816b2f689e44ea888e6c361ec59b7e3";
const scopes = "playlist-modify-private";
const redirect_uri = "http://localhost:3000/";

export default function AuthLogin() {
  const getToken = useSelector((state) => state.auth.token);

  const dispatch = useDispatch();
  function redirectToSpotify() {
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes}&response_type=token&show_dialog=true`;
    window.location = loginUrl;
  }

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    dispatch(authToken(token));
    console.log(token);
  }, [getToken, dispatch]);

  return (
    <button className="button" onClick={redirectToSpotify}>
      Login with Spotify
    </button>
  );
}
