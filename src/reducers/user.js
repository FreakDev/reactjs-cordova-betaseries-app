
import { combineReducers } from 'redux';

import loginActions from './loginActions';

import store from 'store';


export default combineReducers({
    "infos": (state = {login: "", token: ""}, action) => {

        let userStoredInfos = store.has('user') ? store.get('user') : false;

        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFUL:
            let userData = { login: action.payload.user.login, token: action.payload.token, id: action.payload.user.id };
            if (action.payload.rememberMe) {
                store.set("user", userData);
            }
            return userData;
        default:
            var defaultState = userStoredInfos || state;
            return defaultState;
        }
    }
});