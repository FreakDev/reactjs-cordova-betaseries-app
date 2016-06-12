import React from 'react';
import store from '../reducers';

import InputText from './forms/InputText';
import InputPassword from './forms/InputPassword';

import { combineValidators } from '../validators';

export default class Login extends React.Component {
    render() {
        return (
            <div style={ {'marginTop':'50%'} }>
                <div style={ {'top':'-50%'} }>
                    <h2>Previously On</h2>
                    <InputText name="login" label="login" validator={ combineValidators('isNumber', 'length') } validatorRules={ { 'length': { minLength: 5, maxLength: 10}, 'isNumber': { minValue: 5, maxValue: 10 } } }/>
                    <InputPassword name="password" label="password" />
                </div>
            </div>
        );
    }
}