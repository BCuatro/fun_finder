import React from 'react'
import "../../styles/profile.css"
import ExperienceForm from '../reviews/review'

const aboutMe = (user) => {

  return (
    <div className="aboutmecontainer">

      <h2 className= "tabContentTitle" id="AboutTitle">About Me:</h2>
      <ul> 
        <li><label>First Name:&nbsp;&nbsp;{user.fname}</label></li> 
        <li> <label>Last Name:&nbsp;&nbsp;{user.lname}</label></li> 
        <li><label>Pronouns:&nbsp;&nbsp;{user.pronouns}</label></li>
        <li> <label>Gender:&nbsp;&nbsp;{user.gender}</label></li>
      </ul>
      <br />
    </div>

  )
}

export default aboutMe