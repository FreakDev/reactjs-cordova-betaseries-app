import thunkMiddleware from 'redux-thunk'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux';

import { default as user } from './user'
import { default as login } from './login'
import { default as shows } from './shows'


import { routerReducer as routing } from 'react-router-redux';

export default createStore(combineReducers({
    user,
    login,
    shows,
    routing,
}), window.devToolsExtension && window.devToolsExtension(), applyMiddleware (thunkMiddleware));

export const triggerAction = (type, payload = {}) => {
    if (!type) {
        throw Error("can't trigger action with no type");
    }
    return {
        type: type,
        payload
    }
}