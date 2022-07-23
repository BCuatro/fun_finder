import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import SignupErrorsReducer from './signup_errors_reducer';

export default combineReducers({
    session: SessionErrorsReducer,
    signupErrors: SignupErrorsReducer
});

