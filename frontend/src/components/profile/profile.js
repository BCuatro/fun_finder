import React from 'react';
import ProfileNavBarContainer from './profile_navbar_container';
import "../../styles/profile.css";
import "../../styles/modal.css";
import Modal from '../modal/modal';
import "../../styles/edit_dropdown.css";



class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleProfilePicModal = this.handleProfilePicModal.bind(this);
        this.handlePhotoAModal = this.handlePhotoAModal.bind(this);
        this.handlePhotoBModal = this.handlePhotoBModal.bind(this);
        this.handlePhotoCModal = this.handlePhotoCModal.bind(this);

    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId);

    }
    handleOpenModal(e) {
        e.preventDefault();
        this.props.openModal();
    }

    handleProfilePicModal(e) {
        e.preventDefault();
        this.props.profilePicModal();
    }
    handlePhotoAModal(e) {
        e.preventDefault();
        this.props.photoAModal();
    }

    handlePhotoBModal(e) {
        e.preventDefault();
        this.props.photoBModal();
    }

    handlePhotoCModal(e) {
        e.preventDefault();
        this.props.photoCModal();
    }



    render() {

        // let editButton
        // const {user} = this.props
        // if (parseInt(this.props.currentUser.id)=== parseInt(this.props.match.params.userId) ){
        //     editButton = <button onClick = {this.handleOpenModal}>Edit Profile</button> } else{
        //         editButton =""
        //     } 
        if (!this.props.user) return null;

        return (

            <div className="profilecontainer">
                <Modal />
                <div className="profilesection"><ProfileNavBarContainer />
                </div>
                <div className="profilepicture">
                    <div> <img id="profilepic" src={this.props.user.profilePic} /></div>

                    <div>
                        <p id="ptext">Name: {this.props.user.fname} {this.props.user.lname}</p>
                        <p id="ptext">Pronouns: {this.props.user.pronouns}</p>
                    </div>
                    {/* <button className = "buttons" id= "editButton" onClick = {this.handleOpenModal}>Edit Profile</button> 
                     <button className = "buttons" id= "editButton" onClick = {this.handleProfilePicModal}>Edit Profile Picture</button>  */}
                    <div className="dropdown-menu">
                        Edit Profile
                        <ul className="dropdown">
                            <li><button className="editButton" onClick={this.handleOpenModal}>Profile Info</button></li>
                            <li> <button className="editButton" onClick={this.handleProfilePicModal}>Profile Picture</button> </li>
                            <li> <button className="editButton" onClick={this.handlePhotoAModal}>My Picture-Photo A</button> </li>
                            <li> <button className="editButton" onClick={this.handlePhotoBModal}>My Picture-Photo B</button> </li>
                            <li> <button className="editButton" onClick={this.handlePhotoCModal}>My Picture-Photo C</button> </li>
                        </ul>

                    </div>

                </div>

            </div>
        );
    }
}
export default Profile;