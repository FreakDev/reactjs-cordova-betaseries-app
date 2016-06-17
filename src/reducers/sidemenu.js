
import { combineReducers } from 'redux';

export const actions = {
    "SIDEMENU_TRIGGER": "SIDEMENU_TRIGGER"
}

export default combineReducers({
    "open": (state = false, action) => {

        switch (action.type) {
        case "SIDEMENU_TRIGGER":
            return !state;
        default:
            return state;
        }
    }
});