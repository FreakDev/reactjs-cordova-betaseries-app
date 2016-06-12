import React, { PropTypes } from 'react';
import InputText from './InputText';

export default class InputPassword extends InputText {

    constructor(props) {
        super(props);

        this.inputType = "password"

    }

    static propTypes = {
        placeholder: PropTypes.string,
        label: PropTypes.string,
        ...InputText.propTypes
    }

}