import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditProfileContainer from '../profile/edit_profile_container';
import { withRouter } from 'react-router-dom';
import "../../styles/modal.css";
import ProfilePictureContainer from '../profile/profile_picture_container';
import PhotoAlbumContainer from '../profile/photo_album_container';
import PhotoBContainer from '../profile/photo_b_container';
import PhotoCContainer from '../profile/photo_c_container';



function Modal({ modal, closeModal, userId, currentUser }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {

    case 'editprofile':

      component = <EditProfileContainer className="editProfile" />;
      break;
    case 'editprofilepicture':

      component = <ProfilePictureContainer className="editProfile" />;
      break;
    case 'editphotoA':

      component = <PhotoAlbumContainer className="editProfile" />;
      break;

    case 'editphotoB':

      component = <PhotoBContainer className="editProfile" />;
      break;

    case 'editphotoC':

      component = <PhotoCContainer className="editProfile" />;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background">
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <div>{component}</div>
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
