import { connect } from 'react-redux';
import { clearSessionsErrors } from '../../actions/session_actions';
import Sessions from './sessions';



const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
    return {
        clearErrors: () => dispatch(clearSessionsErrors()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sessions);