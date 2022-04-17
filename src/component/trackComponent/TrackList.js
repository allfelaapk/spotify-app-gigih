import React from "react";
import "../../App.css";

const TrackList = ({ images, name, artist, onClick, children, album }) => {
  return (
    <table className="card">
      <tbody>
        <tr>
          <td className="card-list">
            <img className="image-opt" src={images} alt="this-images" />
            <div className="card-track">
              <div className="card-title">
                <h1 className="artist">{artist}</h1>
                <h3 className="name">{name}</h3>
              </div>
              <div className="track-bottom">
                <p className="album-name">{album}</p>
                <button className="btn" onClick={onClick}>
                  {children}
                </button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TrackList;
