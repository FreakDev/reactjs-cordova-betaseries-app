
import { combineReducers } from 'redux';

export default combineReducers({
    "isLoggedIn": (state = false, action) => {
        switch (action.type) {
        case 'LOGIN':
          return true;
        case 'LOGOUT':
          return false;
        default:
          return state;
        }
    },
    authResult: (state = true, action) => {
        switch (action.type) {
        case 'LOGIN':
          return true;
        case undefined:
            return false;
        default:
          return state;
        }
    },
    "loading": (state = false, action) => {
        switch (action.type) {
        case 'LOGIN':
          return true;
        case 'LOGOUT':
          return false;
        default:
          return state;
        }        
    },
    "infos": (state = {login: "", token: ""}, action) => {
        return state;
    }
});

export var successFullLogin = (success) => {
    if (success) {
        return {type: 'LOGIN'};
    }
}