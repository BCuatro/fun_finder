import React from 'react'
import "../../styles/profile.css"

const aboutMe =(user) =>{

    return (
     <div className ="aboutmecontainer">

     <h2 id="AboutTitle">About Me</h2>
     <label>First Name: {user.fname}</label>
     <br />
     <label>Last Name: {user.lname}</label>
     <br />
     <label>Pronouns:{ user.pronouns}</label>
     <br />
     <label>Gender: {user.gender}</label>
     <br />
     
   </div>
        
      )
    }

export default aboutMe