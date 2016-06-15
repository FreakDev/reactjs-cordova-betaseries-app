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

import { hashHistory } from 'react-router'


var overlayContainerStyle = {
    "position": "absolute",
}


var overlayStyle = {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": "100%",
    "height": "100%",
    "backgroundColor": "rgba(255,255,255, 0.7)",
    "zIndex": 10
}

var loaderStyle = {
    "left": "50%",
    "top": "35%"
}

class LoginForm extends Form {

    constructor(props) {
        super(props);

        overlayStyle.display = props.isLoading ? 'block' : 'none';

    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired,
    }

    static propTypes = {
        authResult: PropTypes.bool,
        onSubmit: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {

        overlayStyle.display = nextProps.isLoading ? 'block' : 'none';

    }


    render() {
        return (
            <div className="container overlay-container" style={ overlayContainerStyle }>
                <Form onSubmit={ this.props.onSubmit } >
                    <span>{ this.props.authResult ? '' : 'login failed' }</span>
                    <InputText validator={ notEmpty } name="login" label="login"/>
                    <InputPassword validator={ notEmpty } name="password" label="password" />
                </Form>
                <div className="overlay" style={ Object.assign({}, overlayStyle) }>
                    <div style={ loaderStyle } className="preloader-wrapper small active">
                        <div className="spinner-layer spinner-green-only">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div><div className="gap-patch">
                            <div className="circle"></div>
                          </div><div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return { 
            authResult: state.login.authResult,
            isLoading: state.login.isLoading,
            isLoggedIn: !!state.user.infos.login
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