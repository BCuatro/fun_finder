import React from 'react';
import ProfileNavBarContainer from './profile_navbar_container';
import "../../styles/profile.css"
import "../../styles/modal.css"
import propic from "../../SMProfilePic.png"
import Modal from '../modal/modal';
// import EditProfileContainer from '../profile/edit_profile_container';
// import Tabs from './tabs';


class Profile extends React.Component{
    constructor(props){
        super(props)
        
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
       
           
    }
    
  
    componentDidMount(){
        
       
        // this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUsers()
        
    }
    handleOpenModal(e){
        e.preventDefault();
        this.props.openModal()
    }
    
    
    render(){ 
      
        // let editButton
        // const {user} = this.props
        // if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
        //     editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
        //         editButton =""
        //     } 
            
    
        return (
            
            <div className="profilecontainer">
                <Modal/>
                {/* <div>{editButton}</div> */}
                <div className="profilesection"><ProfileNavBarContainer />
                </div>
                <div className="profilepicture">
                   <div> <img id= "profilepic" src={propic} className="profile picture" alt="profile picture" />
                        <p id="ptext">Name: SpiderMan</p>
                        <p id ="ptext">Pronouns:"He/His</p>
                        <button onClick = {this.handleOpenModal}>Edit Profile</button> 
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