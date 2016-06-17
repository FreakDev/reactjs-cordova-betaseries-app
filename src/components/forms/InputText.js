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

    render() {
        var key = 0;

        var label = this.props.label ? <label htmlFor={ this.id }>{ this.props.label }</label> : '';
        return (
            <div className="input-field">
                <input id={ this.id } type={this.inputType} placeholder={ this.props.placeholder } name={ this.props.name } value={ this.state.value } onChange={ this.onChange } />
                { label }
                <ul className="errors">
                    { this.state.errors.map( (err) => {
                        key++;
                        return <li key={this.id + "-" + key}>{ err }</li>
                    } ) }
                </ul>
            </div>
        )
    }
}