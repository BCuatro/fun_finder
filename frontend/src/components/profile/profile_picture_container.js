import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser, fetchUsers, updateUser} from "../../actions/users_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import { updatePhoto } from "../../util/users_api_util";
import ProfilePictureForm from "./profile_picture";




const mapStateToProps = (state, ownProps) => {
  
    const users =state.entities.users
    // const user =state.entities.users.data.filter(ele=>ele._id === state.session.user.id)[0]
    const currentUser =state.session.user
    const user =state.entities.users[ownProps.match.params.userId]
    const userId= state.session.user.id
   
    return{
      
      users,
      currentUser,
      userId,
      user
    }
      
  };
  
  const mapDispatchToProps = (dispatch) => {

    return {

        fetchUser: (userId) => dispatch(fetchUser(userId)),
        // fetchUsers: () => dispatch(fetchUsers()),
        openModal: ()=> dispatch(openModal('editprofile')),
        closeModal: () => dispatch(closeModal()),
        updateUser: (user) => dispatch(updateUser(user)),
        // updatePhoto: (file) => updatePhoto(file)
        

    };
  };

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfilePictureForm))