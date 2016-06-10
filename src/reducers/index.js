import { combineReducers, createStore } from 'redux'
import { connect } from 'react-redux';

/*import userStateReducer from './user'*/
import { routerReducer } from 'react-router-redux';

const app = createStore(combineReducers({
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
    routing: routerReducer
}));

export default app