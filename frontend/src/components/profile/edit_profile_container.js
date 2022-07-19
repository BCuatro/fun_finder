import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser, fetchUsers, updateUser} from "../../actions/users_actions";
import { openModal, closeModal } from '../../actions/modal_actions';


import EditForm from "./edit_profile_form";




const mapStateToProps = (state, ownProps) => {
  
    const users =state.entities.users
    const user =state.entities.users.data.filter(ele=>ele._id === state.session.user.id)[0]
    const currentUser =state.session.user
    const userId= state.session.user.id
   
    return{
      
      users,
      user,
      currentUser,
      userId
    }
      
  };
  
  const mapDispatchToProps = (dispatch) => {

    return {

        fetchUser: (userId) => dispatch(fetchUser(userId)),
        fetchUsers: () => dispatch(fetchUsers()),
        openModal: ()=> dispatch(openModal('editprofile')),
        closeModal: () => dispatch(closeModal()),
        updateUser: (user) => dispatch(updateUser(user))
        

    };
  };

  export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditForm))
  