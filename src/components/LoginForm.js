import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import InputText from './forms/InputText';
import InputPassword from './forms/InputPassword';
import Form from './forms/Form';

import { notEmpty } from '../validators'

import { triggerAction } from '../reducers';

import {default as loginActions } from '../reducers/loginActions';

import BetaSeries from '../BetaSeries';
import API_KEY from '../apikey';

var overlayStyle = {}

class LoginForm extends Form {

    constructor(props) {
        super(props);

        overlayStyle.display = this.props.isLoading ? 'block' : 'none';

    }

    static propTypes = {
        authResult: PropTypes.bool,
        onSubmit: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="overlay-container">
                <Form onSubmit={ this.props.onSubmit } >
                    <span>{ this.props.authResult ? '' : 'login failed' }</span>
                    <InputText validator={ notEmpty } name="login" label="login"/>
                    <InputPassword validator={ notEmpty } name="password" label="password" />
                </Form>
                <div className="overlay" style={ overlayStyle }></div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return { 
            authResult: state.login.authResult,
            isLoading: state.login.isLoading
        } 
    }, 
    (dispatch) => {
        
        return {
            onSubmit: (values) => {
                dispatch(triggerAction(loginActions.LOGIN_TRY));

                dispatch( function () {
                    var api = BetaSeries.getInstance(API_KEY.key);

                    api.login(
                        values.login, values.password
                    )
                        .then(function (response) {
                            if (response.status >= 200 && response.status < 300) {
                                response.json().then((data) => dispatch(triggerAction(loginActions.LOGIN_SUCCESSFUL, data)) )
                            } else {
                                dispatch(triggerAction(loginActions.LOGIN_FAIL));
                            }
                        }, function () {
                            dispatch(triggerAction(loginActions.LOGIN_FAIL));
                        });
                } );
                return false;
            }
        }
    }
)(LoginForm);