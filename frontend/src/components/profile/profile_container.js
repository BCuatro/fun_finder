import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_actions';
import { fetchUser, fetchUsers } from '../../actions/users_actions';
import Profile from './profile';


const mapStateToProps = (state, ownProps) => {
    return {
      currentUser: state.session.user,
      user: state.entities.users[ownProps.match.params.userId]
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchUser: (userId) => dispatch(fetchUser(userId)),
      fetchUsers: () => dispatch(fetchUsers()),
      openModal: ()=> dispatch(openModal('editprofile')),
      closeModal: () => dispatch(closeModal())
    };
  };
  
  export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));