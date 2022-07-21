import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions';
import Sessions from "./sessions"



const mapStateToProps = (state) => {
    
};

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(removeErrors()),
        // login: user => dispatch(login(user))
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(Sessions)