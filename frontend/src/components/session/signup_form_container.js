import { connect } from 'react-redux';
import { removeSignupErrors, signup } from '../../actions/session_actions';
import SignupForm from "./signup_form";


const mapStateToProps = (state) => {
    return {
        signedIn: state.session.isSignedIn,
        signupErrors: state.errors.signupErrors
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        signup: user => dispatch(signup(user)),
        removeSignupErrors: () => dispatch(removeSignupErrors())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);