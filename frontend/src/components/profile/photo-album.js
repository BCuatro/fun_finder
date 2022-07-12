import React from 'react'
import "./album.css"
import picA from "../../SMPic1.png"
import picB from "../../SMpic2.png"
import picC from "../../SMpic3.png"

const photoAlbum =(user) =>{

    return (
     <div >

      <h2 id="AboutTitle">Describe yourself with 3 pictures</h2>
      <div className = "pic1"><img src={picA} className="picture1" alt="picture 1" /></div>
      <br />
      
    
    
     
     
   </div>
        
      )
    }

export default photoAlbum