import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux';

import { default as user } from './user'
import { routerReducer as routing } from 'react-router-redux';

const app = createStore(combineReducers({
    user,
    routing,
}), window.devToolsExtension && window.devToolsExtension(), applyMiddleware (thunkMiddleware));

export default app