import { combineReducers, createStore } from 'redux'
import { connect } from 'react-redux';

import userStateReducer from './user'
import { routerReducer } from 'react-router-redux';

const app = createStore(combineReducers({
    user: userStateReducer,
    routing: routerReducer
}), window.devToolsExtension && window.devToolsExtension());

export default app