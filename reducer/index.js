import {combineReducers} from 'redux';
import loginReducer from './loginReducer';

/* 
    import all relavance reducer then combining

*/

export default combineReducers({
    login:loginReducer
});