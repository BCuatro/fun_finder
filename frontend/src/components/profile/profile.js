import React from 'react';
import ProfileNavBarContainer from './profile_navbar_container';
import "../../styles/profile.css"
// import EditProfileContainer from '../profile/edit_profile_container';
// import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        
        
           
    }
    
    render(){ 
      
        // let editButton
        //  const {user} = this.props
        // if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
        //     editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
        //         editButton =""
        //     } 
            
    
        return (
            <div className="profile">
                {/* <div>{editButton}</div> */}
                <div className="div1"><ProfileNavBarContainer />
                {/* <div className="profilePic">
                     {this.handleProfilePic(user)}
                 </div>
                 <input type="file" 
                 onChange ={this.handleProfilePic.bind(this)}/> */}
                
                </div>
                
                {/* <EditProfileContainer /> */}
               
                
            </div>
        )
    }
}
export default Profile