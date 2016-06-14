import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import InputText from './forms/InputText';
import InputPassword from './forms/InputPassword';
import Form from './forms/Form';

import { successFullLogin } from '../reducers/user';

// import { login } from '../actions';

class LoginForm extends Form {

    static propTypes = {
        authResult: PropTypes.bool,
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <Form onSubmit={ this.props.onSubmit } >
                <span>{ this.props.authResult ? '' : 'login failed' }</span>
                <InputText name="login" label="login"/>
                <InputPassword name="password" label="password" />
            </Form>            
        )
    }

}

export default connect(
    (state) => {
        return { 
            authResult: state.user.authResult 
        } 
    }, 
    (dispatch) => {
        return {
            onSubmit: (values) => {
                dispatch( function () {
                    fetch("https://api.betaseries.com/members/auth", {
                      method: 'POST',
                      body: JSON.stringify(values)
                    }).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            dispatch(successFullLogin(true))
                        } else {
                            dispatch(successFullLogin(false))
                        }
                    });
                } );
                return false;
            }
        }
    }
)(LoginForm);