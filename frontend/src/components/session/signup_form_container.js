import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SignupForm from "./signup_form"
import LoginFormContainer from './login_form_container';
import { Link } from 'react-router-dom';
const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        errors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        signup: user => dispatch(signup(user)),
    
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(SignupForm)