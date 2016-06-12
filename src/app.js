import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import store from './reducers';

import Layout from './components/Layout';
import MainContainer from './components/MainContainer';
import Login from './components/Login';
import Home from './components/Home';

function requireAuth (router, transition) {
    if (!store.getState().user.isLoggedIn) {
        transition('/login');
    }
}

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route component={MainContainer}>
                <Route path="/login" component={Login}/>
                <Route onEnter={requireAuth} path="/" component={Layout}>
                    <IndexRoute component={Home} />
                </Route>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#app')
);