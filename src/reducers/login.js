
import { combineReducers } from 'redux';

import { default as loginActions } from './loginActions';

export default combineReducers({
    authResult: (state = true, action) => {
        switch (action.type) {
        case loginActions.LOGIN_SUCCESSFUL:
          return true;
        case loginActions.LOGIN_FAIL:
            return false;
        default:
          return state;
        }
    },
    isLoading: (state = false, action) => {
        switch (action.type) {
        case loginActions.LOGIN_TRY:
          return true;
        default:
          return false;
        }        
    },  
});