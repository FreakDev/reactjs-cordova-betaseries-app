import React, { PropTypes } from 'react';
import AbstractField from './AbstractField';

export default class InputText extends AbstractField {

    constructor(props) {
        super(props);

        this.inputType = "text";

    }

    static displayName = 'InputText';

    static propTypes = {
        name: PropTypes.string,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        ...AbstractField.propTypes
    }

    renderErrors() {
        if (this.props.validator) {
            let key = 0;
            return (
                <ul className="errors">
                    { this.state.errors.map( (err) => {
                        key++;
                        return <li key={this.id + "-" + key}>{ err }</li>
                    } ) }
                </ul>

            )
        }

        return null;
    }

    render() {
        var label = this.props.label ? <label htmlFor={ this.id }>{ this.props.label }</label> : '';
        let input = (<input style={ this.props.style } id={ this.props.id || this.id } type={this.inputType} placeholder={ this.props.placeholder } name={ this.props.name } value={ this.state.value } onChange={ this.onChange } />)
        if (!this.props.noWrapper) {
            return (
                <div className="input-field">
                    { input }
                    { label }
                    { this.renderErrors() }
                </div>
            )
        } else {
            return input
        }
    }
}