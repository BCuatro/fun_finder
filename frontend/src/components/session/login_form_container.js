import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
    return {
        loginErrors: state.errors.session
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: user => dispatch(login(user)),
        removeErrors: () => dispatch(removeErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);