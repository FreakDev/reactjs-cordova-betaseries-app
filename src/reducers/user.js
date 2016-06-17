
import { combineReducers } from 'redux';

import loginActions from './loginActions';

import store from 'store';

export const actions = {
    "USER_LOGOUT": "USER_LOGOUT"
}

export default combineReducers({
    "infos": (state = {login: "", token: ""}, action) => {

        let userStoredInfos = store.has('user') ? store.get('user') : false;

        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFUL:
            let userData = { login: action.payload.user.login, token: action.payload.token, id: action.payload.user.id };
            if (action.payload.rememberMe) {
                store.set("user", userData);
                userStoredInfos = userData;
            }
            return userData;
        case actions.USER_LOGOUT:
            let defaultUserData = {login: "", token: ""};
            store.set("user", {login: "", token: ""});
            return defaultUserData;
        default:
            var defaultState = userStoredInfos || state;
            return state;
        }
    }
});