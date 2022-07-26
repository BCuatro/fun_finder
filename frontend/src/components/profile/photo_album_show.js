import React from 'react';
import "../../styles/album.css";

const photoAlbum = (user) => {

  return (
    <div id="album">

      <h2 className="tabContentTitle" id="albumTitle">Describe yourself with 3 pictures</h2>
      <div className="albumContainer">
        <ul>

          <li className="albumPicture" >
            <img src={user.aboutMePicA} id="pic" />
          </li>

          <li className="albumPicture"  >
            <img src={user.aboutMePicB} id="pic" />
          </li>

          <li className="albumPicture"  >
            <img src={user.aboutMePicC} id="pic" />
          </li>
        </ul>

      </div>

      <label className="fun-fact-label"> Fun Fact:
        <div id="fun-fact">{user.slogan}</div>
      </label>
    </div>

  );
};

export default photoAlbum;