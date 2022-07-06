import { connect } from "react-redux";
import React from 'react';
import { withRouter} from "react-router-dom"

import ProfileNavBar from "./profile_navbar"



const mapStateToProps = (state, ownProps) => {

     
      const currentUser =state.session.user

      return{
        currentUser
      }
       
   };
   
   const mapDispatchToProps = dispatch => {
     return {
 
         
     };
   };
 
   export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ProfileNavBar))