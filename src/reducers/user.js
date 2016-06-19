
import { combineReducers } from 'redux';

import loginActions from './loginActions';

import store from 'store';

export const actions = {
    "USER_LOGOUT": "USER_LOGOUT",
    "USER_AUTOLOGIN": "USER_AUTOLOGIN"
}

let defaultUserData = {login: "", token: "", id: ""};

export default combineReducers({
    "infos": (state = defaultUserData, action) => {

        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFUL:
            let userData = { login: action.payload.user.login, token: action.payload.token, id: action.payload.user.id };
            if (action.payload.rememberMe) {
                store.set("user", userData);
            }
            return userData;
        case actions.USER_AUTOLOGIN:
            return store.has('user') ? store.get('user') : state;
        case actions.USER_LOGOUT:
            store.remove("user");
            return defaultUserData;
        default:
            return state;
        }
    }
});