<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TrackList from '../../component/trackComponent/TrackList';
import { authToken } from '../../redux/action';

export default function Home() {
  const [searchKey, setSearchKey] = useState('');
=======
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import TrackList from "../../component/trackComponent/TrackList";
import { authToken } from "../../redux/action";

export default function Home() {
  const [searchKey, setSearchKey] = useState("");
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState([]);
  const [combine, setCombine] = useState([]);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // *untuk mendapatkan current user
<<<<<<< HEAD
  const [isUser, setUser] = useState('');
=======
  const [isUser, setUser] = useState("");
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60

  // * untuk membuat playlist
  const [isPlaylist, setPlaylist] = useState([]);

  // * Add track to playlist
  const [trackPlaylist, setTrackPlaylist] = useState([]);
  const [inputPlaylist, setInputPlaylist] = useState({
<<<<<<< HEAD
    title: '',
    description: '',
=======
    title: "",
    description: "",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
  });

  //* function untuk mengambil api dari spotify untuk membuat playlist
  const createPlaylist = (e) => {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/users/${isUser.id}/playlists`, {
<<<<<<< HEAD
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
=======
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
      },
      body: JSON.stringify({
        name: inputPlaylist.title,
        description: inputPlaylist.description,
        public: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        // console.log(data);
=======
        console.log(data);
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        setPlaylist(data);
      });
  };

  const handleClick = (track) => {
    const alreadySelected = selected.find((item) => item.id === track.id);

    if (alreadySelected) {
      setSelected(selected.filter((item) => item.id !== track.id));
    } else {
      setSelected([...selected, track]);
    }
  };

  //* useEffect berfungsi untuk merender ulang component
  useEffect(() => {
    const getUsers = async () => {
<<<<<<< HEAD
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
=======
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        },
      })
        .then((res) => res.json())
        .then((result) => result);
      setUser(response);
<<<<<<< HEAD
=======
      console.log(response);
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
    };
    getUsers();
  }, [token]);

  //* useEffect ini berfungsi untuk menggabungkan state selected list dan search result
  useEffect(() => {
    const combineTrack = searchResults.map((track) => ({
      ...track,
      isSelected: selected.find((item) => item.id === track.id),
    }));
    setCombine(combineTrack);
  }, [selected, searchResults]);

  const handleInput = (e) => {
    setSearchKey(e.target.value);
  };

  const handleInputPlaylist = (e) => {
    const { name, value } = e.target;
    setInputPlaylist({ ...inputPlaylist, [name]: value });
  };

  const addToPlaylist = async () => {
    const url = `https://api.spotify.com/v1/playlists/${isPlaylist.id}/tracks`;
    const track = selected.map((elem) => elem.uri);
    await fetch(url, {
<<<<<<< HEAD
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
=======
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
      },
      body: JSON.stringify({
        uris: track,
      }),
<<<<<<< HEAD
    }).then((res) => res.json());
=======
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60

    await fetch(
      `https://api.spotify.com/v1/playlists/${isPlaylist.id}/tracks`,
      {
<<<<<<< HEAD
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application.json',
=======
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application.json",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
<<<<<<< HEAD
        // console.log(data);
=======
        console.log(data);
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        setTrackPlaylist(data.items);
      });
    setSelected([]);
  };

  const searchTrack = (e) => {
    e.preventDefault();

    fetch(
      `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${searchKey}`,
      {
<<<<<<< HEAD
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
=======
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setSearchResults(result.tracks.items));

<<<<<<< HEAD
    // console.log(token);
  };

  function logout() {
    dispatch(authToken(''));
    window.localStorage.removeItem('token');
  }
  if (token === '') {
    return <Redirect to="/login" />;
  }
  const renderItem = () =>
    combine &&
    combine.map((track) => (
      <React.Fragment key={track.id}>
        <TrackList
          images={track.album.images[0].url}
          name={track.name}
          artist={track.artists[0].name}
          album={track.album.name}
          onClick={() => handleClick(track)}
        >
          {track.isSelected ? 'Deselect' : 'Select'}
        </TrackList>
      </React.Fragment>
    ));
  // console.log(trackPlaylist);
=======
    console.log(token);
  };

  function logout() {
    dispatch(authToken(""));
    window.localStorage.removeItem("token");
  }
  if (token === "") {
    return <Redirect to="/login" />;
  }
  const renderItem = () => {
    return (
      combine &&
      combine.map((track, index) => (
        <React.Fragment key={index}>
          <TrackList
            images={track.album.images[0].url}
            name={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
            onClick={() => handleClick(track)}
          >
            {track.isSelected ? "Deselect" : "Select"}
          </TrackList>
        </React.Fragment>
      ))
    );
  };
  console.log(trackPlaylist);
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
  return (
    <>
      <div className="flex  mt-4 justify-end">
        <div className="flex-col mx-4">
          <p className=" text-white font-semibold mb-2"> {isUser.id}</p>

<<<<<<< HEAD
          <button className="button" type="button" onClick={logout}>
=======
          <button className="button" onClick={logout}>
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
            Logout
          </button>
        </div>
      </div>
      {isPlaylist.length === 0 ? null : <h1>{isPlaylist.name} Playlist</h1>}
      <h3>{isPlaylist.description}</h3>
      <div className="track-content">
<<<<<<< HEAD
        {trackPlaylist.map((item) => (
=======
        {trackPlaylist.map((item, index) => (
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
          <React.Fragment key={item.track.id}>
            <TrackList
              images={item.track.album.images[1].url}
              name={item.track.name}
              artist={item.track.artists[0].name}
              album={item.track.album.name}
            >
              Play
            </TrackList>
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col w-1/4 mx-auto">
        <h1> Create playlist</h1>
        <form className="flex flex-col" onSubmit={createPlaylist}>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white my-2"
            type="text"
            placeholder="Title"
            name="title"
            maxLength="10"
            onChange={handleInputPlaylist}
            value={inputPlaylist.title}
          />
          <textarea
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white mb-2"
            type="text"
            placeholder="Description"
            name="description"
            onChange={handleInputPlaylist}
            value={inputPlaylist.description}
          />
          <input
            className="btn-playlist"
            type="submit"
            value="Create Playlist"
          />
        </form>

        <form className="flex flex-col" onSubmit={searchTrack}>
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white my-2"
            onChange={handleInput}
            type="text"
            name="search"
            placeholder="Artist, Song, or Album"
            value={searchKey}
          />
          <input className="btn-playlist" type="submit" value="Search" />
        </form>
      </div>

      {/* <div className="flex  w-full  ">
        <div className="flex-col mx-auto w-1/2 justify-center">
<<<<<<< HEAD

=======
         
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
        </div>
      </div> */}

      <div className="track-content">
<<<<<<< HEAD
        {selected.map((track) => (
          <React.Fragment key={track.id}>
=======
        {selected.map((track, index) => (
          <React.Fragment key={index}>
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
            <TrackList
              images={track.album.images[1].url}
              name={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              onClick={() => handleClick(track)}
            >
<<<<<<< HEAD
              {' '}
=======
              {" "}
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
              Deselect
            </TrackList>
          </React.Fragment>
        ))}
      </div>
      {selected.length === 0 ? null : (
        <div className="flex justify-center">
<<<<<<< HEAD
          {' '}
          <button
            className=" btn-playlist justify-self-center"
            type="button"
=======
          {" "}
          <button
            className=" btn-playlist justify-self-center"
>>>>>>> c9801eb1d951e6402de9bacb6e6488b384d0ba60
            onClick={addToPlaylist}
          >
            Save to Playlist
          </button>
        </div>
      )}
      <div className="track-content">{renderItem()}</div>
    </>
  );
}
