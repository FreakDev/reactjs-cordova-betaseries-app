
import { combineReducers } from 'redux';

import { default as loginActions } from './login';

export default combineReducers({
    "infos": (state = {login: "", token: ""}, action) => {
        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFULL:
          return action.payload;
        default:
          return state;
        }
    }
});