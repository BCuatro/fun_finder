import React from 'react';
import ProfileNavBarContainer from './profile_navbar_container';
import "../../styles/profile.css"
import "../../styles/modal.css"
import Modal from '../modal/modal';
import "../../styles/edit_dropdown.css"




// import EditProfileContainer from '../profile/edit_profile_container';
// import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        // this.props = this.props
        
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleProfilePicModal= this.handleProfilePicModal.bind(this)
        
       
           
    }
    
  
    componentDidMount(){
        
       
        // this.props.fetchUser(this.props.match.params.userId)
        // this.props.fetchUsers()
        this.props.fetchUser(this.props.userId)
        
    }
    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }

    handleProfilePicModal(e){
        e.preventDefault();
        this.props.profilePicModal()
    }
    
    
    render(){ 
        // console.log("profile check")
        // console.log(this.props.users)
        // console.log(this.props.currentUser)
        // console.log(this.props.match.params.userId)
      
        // let editButton
        // const {user} = this.props
        // if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
        //     editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
        //         editButton =""
        //     } 
            if(!this.props.user) return null
    
        return (
            
            <div className="profilecontainer">
                <Modal/>
                {/* <div>{editButton}</div> */}
                <div className="profilesection"><ProfileNavBarContainer />
                </div>
                <div className="profilepicture">
                    <div> <img id= "profilepic"  src={this.props.user.profilePic}  /></div>
                   
                    <div>
                        <p id="ptext">{this.props.user.slogan}</p>
                        <p id="ptext">Name:{this.props.user.fname} {this.props.user.lname}</p>
                        <p id ="ptext">Pronouns: {this.props.user.pronouns}</p>
                        
                    </div>
                     {/* <button className = "buttons" id= "editButton" onClick = {this.handleOpenModal}>Edit Profile</button> 
                     <button className = "buttons" id= "editButton" onClick = {this.handleProfilePicModal}>Edit Profile Picture</button>  */}
                    <div className= "dropdown-menu">
                        Edit Profile
                            <ul className= "dropdown">
                                <li><button className="editButton" onClick = {this.handleOpenModal}>Profile Info</button></li>
                                <li> <button className="editButton" onClick = {this.handleProfilePicModal}>Profile Picture</button> </li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                            </ul>

                    </div>

                    
                    
                </div>
                

                {/* <div className="profilePic">
                     {this.handleProfilePic(user)}
                 </div>
                 <input type="file" 
                 onChange ={this.handleProfilePic.bind(this)}/> */}
                
                
                
                {/* <EditProfileContainer /> */}
               
                
            </div>
        )
    }
}
export default Profile