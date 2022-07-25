import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
// import NewPostContainer from '../posts/new_post_container';
import EditProfileContainer from '../profile/edit_profile_container';
import { withRouter } from 'react-router-dom';
import "../../styles/modal.css"
import ProfilePictureContainer from '../profile/profile_picture_container';



function Modal({modal, closeModal, userId, currentUser}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    // case 'login':
    //   component = <LoginFormContainer />;
    //   break;
    
    // case 'createpost':
    //   component = <NewPostContainer className="newPost" closeModal = {closeModal} userid ={userId} />;
    //   break;
    
    case 'editprofile':
      
      component = <EditProfileContainer className="editProfile" />;
      break;
    case 'editprofilepicture':
      
        component = <ProfilePictureContainer className="editProfile" />;
        break;

    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div>{ component }</div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));
