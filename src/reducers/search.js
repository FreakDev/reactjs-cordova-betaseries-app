
import { combineReducers } from 'redux';

import { default as showsActions } from './showsActions';

export default combineReducers({
    isLoading: (state = false, action) => {
        switch (action.type) {
        case showsActions.SHOWS_SEARCH:
          return true;
        case showsActions.SHOWS_SEARCH_DONE:
        case showsActions.SHOWS_SEARCH_FAIL:
          return false;
        default:
          return state;
        }
    },
    shows: (state = [], action) => {
        switch (action.type) {
        case showsActions.SHOWS_SEARCH_DONE:
          return action.payload.shows;
        default:
          return state;
        }
    }
});