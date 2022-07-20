const { RECEIVE_SESSION_ERRORS,RECEIVE_CURRENT_USER, RECEIVE_SIGNUP_ERRORS } = require("../actions/session_actions");

const _nullErrors = [];
const SignupErrorsReducer = (state = _nullErrors, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SIGNUP_ERRORS:
            return action.signupErrors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        default:
            return state;
    }
};

export default SignupErrorsReducer;



