import { combineReducers } from 'redux';

/**
* NOTE: Internal Modules
*/
import UserAuthReducer from './UserAuthReducer';

export default combineReducers({
	user: UserAuthReducer
});
