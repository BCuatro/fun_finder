import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser, updateUser} from "../../actions/users_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import PhotoBForm from "./photo_b";





const mapStateToProps = (state, ownProps) => {
  
    const users =state.entities.users
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
        openModal: ()=> dispatch(openModal('editprofile')),
        closeModal: () => dispatch(closeModal()),
        updateUser: (user) => dispatch(updateUser(user)),
        

    };
  };

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PhotoBForm))