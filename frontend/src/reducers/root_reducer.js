import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import entities from './entities_reducer';
import modal from './modal_reducer';


const RootReducer = combineReducers({
    errors,
    session,
    entities,
    modal
});

export default RootReducer;