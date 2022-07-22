import { connect } from 'react-redux';
import { login, clearSessionsErrors } from '../../actions/session_actions';
import Sessions from './sessions';



const mapStateToProps = (state) => {
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearSessionsErrors()),
        // clearSignupErrors: () => dispatch(clearSessionsErrors())
        // login: user => dispatch(login(user))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Sessions)