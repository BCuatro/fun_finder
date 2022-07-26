import React from 'react'
import "../../styles/album.css"
// import picA from "../../SMPic1.png"
// import picB from "../../SMpic2.png"
// import picC from "../../SMpic3.png"

const photoAlbum =(user) =>{

    return (
     <div id ="album">

      <h2 className="tabContentTitle" id="albumTitle">Describe yourself with 3 pictures</h2>
      <div className ="albumContainer">
        <ul>
          {/* <li id = "pic1"><img src={picA}  alt="picture 1" /></li>
          <li id = "pic2"><img src={picB} alt="picture 2" /></li>
          <li id= "pic3"><img src={picC}  alt="picture 3" /></li> */}
            <li className= "albumPicture" >
              <img src={user.aboutMePicA} id="pic1"  />
            </li>
          
          <li className= "albumPicture"  id="pic2">
          <img src={user.aboutMePicB}  />
          </li>
          <li className= "albumPicture"  id="pic2">
          <img src={user.aboutMePicC}  />
          </li>
        </ul>
      </div>
      
     
   </div>
        
      )
    }

export default photoAlbum