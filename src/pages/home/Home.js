import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import TrackList from '../../component/trackComponent/TrackList';
import { authToken } from '../../redux/action';

export default function Home() {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState([]);
  const [combine, setCombine] = useState([]);

  const { token } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  // *untuk mendapatkan current user
  const [isUser, setUser] = useState('');

  // * untuk membuat playlist
  const [isPlaylist, setPlaylist] = useState([]);

  // * Add track to playlist
  const [trackPlaylist, setTrackPlaylist] = useState([]);
  const [inputPlaylist, setInputPlaylist] = useState({
    title: '',
    description: '',
  });

  //* function untuk mengambil api dari spotify untuk membuat playlist
  const createPlaylist = (e) => {
    e.preventDefault();
    fetch(`https://api.spotify.com/v1/users/${isUser.id}/playlists`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: inputPlaylist.title,
        description: inputPlaylist.description,
        public: false,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
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
      const response = await fetch('https://api.spotify.com/v1/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((result) => result);
      setUser(response);
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
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        uris: track,
      }),
    }).then((res) => res.json());

    await fetch(
      `https://api.spotify.com/v1/playlists/${isPlaylist.id}/tracks`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application.json',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTrackPlaylist(data.items);
      });
    setSelected([]);
  };

  const searchTrack = (e) => {
    e.preventDefault();

    fetch(
      `https://api.spotify.com/v1/search?type=track&include_external=audio&q=${searchKey}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((result) => setSearchResults(result.tracks.items));

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
  return (
    <>
      <div className="flex  mt-4 justify-end">
        <div className="flex-col mx-4">
          <p className=" text-white font-semibold mb-2"> {isUser.id}</p>

          <button className="button" type="button" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      {isPlaylist.length === 0 ? null : <h1>{isPlaylist.name} Playlist</h1>}
      <h3>{isPlaylist.description}</h3>
      <div className="track-content">
        {trackPlaylist.map((item) => (
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

        </div>
      </div> */}

      <div className="track-content">
        {selected.map((track) => (
          <React.Fragment key={track.id}>
            <TrackList
              images={track.album.images[1].url}
              name={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              onClick={() => handleClick(track)}
            >
              {' '}
              Deselect
            </TrackList>
          </React.Fragment>
        ))}
      </div>
      {selected.length === 0 ? null : (
        <div className="flex justify-center">
          {' '}
          <button
            className=" btn-playlist justify-self-center"
            type="button"
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
