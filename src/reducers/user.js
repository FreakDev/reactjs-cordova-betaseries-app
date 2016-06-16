
import { combineReducers } from 'redux';

import loginActions from './loginActions';

export default combineReducers({
    "infos": (state = {login: "", token: ""}, action) => {
        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFUL:
          return { login: action.payload.user.login, token: action.payload.token, id: action.payload.user.id };
        default:
          return state;
        }
    }
});