import React from 'react';

import LoginForm from './LoginForm'

export default class Login extends React.Component {
    render() {
        return (
            <div style={ {'marginTop':'50%'} }>
                <div style={ {'top':'-50%'} }>
                    <h2>Previously On</h2>
                    <LoginForm />
                </div>
            </div>
        );
    }
}