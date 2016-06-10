import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './reducers';

import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';

function requireAuth (router, transition) {
    if (!store.getState().isLoggedIn) {
        transition('/login');
    }
}

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/login" component={Login}/>
            <Route path="/" component={Layout}>
              <Route path="/home" onEnter={requireAuth} component={Home}/>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#app')
);