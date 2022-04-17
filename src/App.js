import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import SpotRouter from './routes/SpotRouter';

function App() {
  // const clientId = process.env.REACT_APP_CLIENT_ID;
  // const uniq = dataSpot.filter((track, index, arr) => {
  //   return arr.map((item) => item.album.id).indexOf(track.album.id) === index;
  // });

  return (
    <Provider store={store}>
      <div className="bg-zinc-900 text-white">
        <SpotRouter />
      </div>
    </Provider>
  );
}

export default App;
