import * as APIUtil from "../util/session_api_util";
import jwt_decode from "jwt-decode";



export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_SIGNUP_ERRORS = "RECEIVE_SIGNUP_ERRORS";
export const REMOVE_SESSION_ERRORS = "REMOVE_SESSION_ERRORS";
export const REMOVE_SIGNUP_ERRORS = "REMOVE_SIGNUP_ERRORS";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN";

export const logoutUser = () => ({
    type: RECEIVE_USER_LOGOUT
});
export const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})
;
export const receiveUserSignIn = () => ({
    type: RECEIVE_USER_SIGN_IN,
    
});

export const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
});

export const receiveSignupErrors = errors => ({
    type: RECEIVE_SIGNUP_ERRORS,
    errors
});

export const removeErrors = errors => ({
    type: REMOVE_SESSION_ERRORS,
    errors
});

export const removeSignupErrors = errors => ({
    type: REMOVE_SIGNUP_ERRORS,
    errors
});


export const signup = user => dispatch => (
     APIUtil.signup(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
        .catch(signupErr => {
            dispatch(receiveSignupErrors(signupErr.response.data));
        })
);


export const login = user => dispatch => (
    APIUtil.login(user).then(res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded));
    })
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
);

export const logout = () => dispatch => {
    localStorage.removeItem('jwtToken');
    APIUtil.setAuthToken(false);
    dispatch(logoutUser());
};

export const clearSessionsErrors = () => dispatch =>{
    dispatch(removeSignupErrors);
    dispatch(removeErrors);
}
