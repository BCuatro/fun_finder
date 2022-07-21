import { connect } from "react-redux";
import React from 'react';
import { withRouter} from "react-router-dom"
import { fetchUser, fetchUsers} from "../../actions/users_actions";

import ProfileNavBar from "./profile_navbar"



const mapStateToProps = (state, ownProps) => {

  const currentUser =state.session.user
  // const users =state.entities.users
  const user =state.entities.users[ownProps.match.params.userId]
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
         
     };
   };
 
   export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfileNavBar))