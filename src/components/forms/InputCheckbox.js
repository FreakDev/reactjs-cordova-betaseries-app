import React, { PropTypes } from 'react';
import InputText from './InputText';

export default class InputCheckbox extends InputText {

    constructor(props) {
        super(Object.assign({}, { value: props.name }, props));

        this.inputType = "checkbox"

    }

    static displayName = 'InputCheckbox';

    static propTypes = {
        placeholder: PropTypes.string,
        label: PropTypes.string,
        ...InputText.propTypes
    }   

    onChange(e) {
        this.setState({ value: e.target.checked });
        this.validate(e.target.checked);
    }

}