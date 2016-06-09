import React from 'react';
import { render } from 'react-dom';

import { Router, Route, hashHistory, Redirect } from 'react-router';

import Layout from './components/Layout';
import Login from './components/Login';
import Home from './components/Home';

render (
    <Router history={hashHistory}>
        <Route path="/login" key="login" component={Login} />
        <Route path="/" component={Layout}>
            <Route key="home" path="home" component={Home} />
        </Route>
        <Redirect from="/" to="/home" />
    </Router>    
, document.getElementById('app'));
