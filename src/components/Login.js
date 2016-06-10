import React from 'react';
import store from '../reducers';

export default class Login extends React.Component {
    render() {
        return (
            <div onClick={() => { store.dispatch({"type": "LOGIN"}) } }>
                Login
            </div>
        );
    }
}