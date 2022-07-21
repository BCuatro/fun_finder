const { RECEIVE_SIGNUP_ERRORS,RECEIVE_CURRENT_USER, REMOVE_SIGNUP_ERRORS } = require("../actions/session_actions");
const _nullErrors = [];

const SignupErrorsReducer = (state = _nullErrors, action) =>{
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case REMOVE_SIGNUP_ERRORS:
            return [];
        default:
            return state;
    }
};

export default SignupErrorsReducer;
