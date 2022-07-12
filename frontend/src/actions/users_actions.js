import * as UserAPIUtil from "../util/users_api_util";

export const RECEIVE_ALL_USERS= "RECEIVE_USERS";
export const RECEIVE_USER= "RECEIVE_USER";



export const receiveUsers = users =>{
    return {
        type: RECEIVE_ALL_USERS,
        users
    }
} 

export const receiveUser = user=>{
    return {
        type: RECEIVE_USER,
        user
    }
} 


export const fetchUsers = () => dispatch => (
    UserAPIUtil.fetchUsers()
      .then(users => dispatch(receiveUsers(users))
      ));
  
  export const fetchUser = (userId) => dispatch => (
    UserAPIUtil.fetchUser(userId)
      .then(user => dispatch(receiveUser(user))
  ));
  
  export const updateUser = (user) => dispatch => (
    UserAPIUtil.updateUser(user)
      .then(user => dispatch(receiveUser(user))
  ));

