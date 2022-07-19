import React from 'react'
import "../../styles/profile.css"

const aboutMe =(user) =>{

    return (
     <div className ="aboutmecontainer">

     <h2 id="AboutTitle">About Me</h2>
     <label>First Name: {user.email}</label>
     <br />
     <label>Last Name:</label>
     <br />
     <label>Gender:</label>
     <br />
     <label>Preference:</label>
     <br />
     <label>Pronouns:</label>
     <br />
     <label>Looking For:</label>
     
   </div>
        
      )
    }

export default aboutMe