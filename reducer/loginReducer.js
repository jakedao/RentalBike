import {LOGIN} from '../actions/actionTypes';

const INITIAL_STATE = {
    userName = '',
}

export default loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case LOGIN: return userName;

    }
}