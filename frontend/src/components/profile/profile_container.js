import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/users_actions';
import Profile from './profile';


const mapStateToProps = (state, ownProps) => {
  // const users =state.entities.users
  // const user =state.entities.users.data.filter(ele=>ele._id === state.session.user.id)[0]
  const user =state.entities.users[ownProps.match.params.userId]
  // const user = state.entities.users[state.session.user.id]
  const currentUser =state.session.user
  const userId= ownProps.match.params.userId
 
  return{
    
    // users,
    user,
    currentUser,
    userId
  }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchUsers: () => dispatch(fetchUsers()),
      openModal: ()=> dispatch(openModal('editprofile')),
      profilePicModal: ()=> dispatch(openModal('editprofilepicture')),
      photoAModal: ()=> dispatch(openModal('editphotoA')),
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));