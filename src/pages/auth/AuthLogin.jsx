import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authToken } from '../../redux/action';

const clientId = 'd816b2f689e44ea888e6c361ec59b7e3';
const scopes = 'playlist-modify-private';
const redirectUri = 'http://localhost:3000/';

export default function AuthLogin() {
  const dispatch = useDispatch();
  function redirectToSpotify() {
    const loginUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_dialog=true`;
    window.location = loginUrl;
  }

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      const token = params.get('access_token');
      if (token) {
        dispatch(authToken(token));
      }
    }
  });

  return (
    <button className="button" type="button" onClick={redirectToSpotify}>
      Login with Spotify
    </button>
  );
}
