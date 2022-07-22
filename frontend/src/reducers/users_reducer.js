
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_USER, RECEIVE_ALL_USERS } from "../actions/users_actions";



// export default function(state = {}, action){
//     Object.freeze(state);
//     let nextState = Object.assign({}, state);
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             nextState[action.currentUser.id] = action.currentUser;
//             return nextState;
//         case RECEIVE_ALL_USERS:
//             nextState = action.users;
//             return nextState;
//         case RECEIVE_USER:
//             nextState[action.user.id] = action.user;
//             return nextState;
//         default:
//             return state;

//     }

// }

const UsersReducer =  (state ={}, action)=> {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        // case RECEIVE_CURRENT_USER:
        //     nextState[action.currentUser.id] = action.currentUser
        //     return nextState
        case RECEIVE_ALL_USERS:
            nextState = action.users.data
            return nextState
        case RECEIVE_USER:
            // debugger
            nextState[action.user.data._id] = action.user.data
            return nextState
        default:
            return state
            
    }

}

export default UsersReducer;



