
import { combineReducers } from 'redux';

import { default as showsActions } from './showsActions';

export default combineReducers({
    isLoading: (state = false, action) => {
        switch (action.type) {
        case showsActions.HOME_REFRESH:
          return true;
        case showsActions.SHOWS_LOAD_DONE:
        case showsActions.SHOWS_LOAD_FAIL:
          return false;
        default:
          return state;
        }
    },
    list: (state = [], action) => {
        switch (action.type) {
        case showsActions.SHOWS_LOAD_DONE:
          return action.payload.member.shows;
        default:
          return state;
        }
    }
});