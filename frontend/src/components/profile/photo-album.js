import React from 'react'
import "../../styles/profile.css"
import picA from "../../SMPic1.png"
import picB from "../../SMpic2.png"
import picC from "../../SMpic3.png"

const photoAlbum =(user) =>{

    return (
     <div className ="aboutmecontainer">

     <h2 id="AboutTitle">Describe yourself with 3 pictures</h2>
     <label className = "album"><img src={picA} className="picture1" alt="picture 1" /></label>
     <br />
     <label className = "album"><img src={picB} className="picture2" alt="picture 2" /></label>
     <br />
     <label className = "album"><img src={picC} className="picture3" alt="picture 3" /></label>
     <br />
    
    
     
     
   </div>
        
      )
    }

export default photoAlbum