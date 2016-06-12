import React, { PropTypes } from 'react';
import AbstractField from './AbstractField';

export default class InputText extends AbstractField {

    constructor(props) {
        super(props);

        this.propTypes = {
            ...super.propTypes,
            placeholder: PropTypes.string,
            label: PropTypes.string
        }
    }

    render() {
        var key = 0;

        var label = this.props.label ? <label htmlFor={ this.id }>{ this.props.label }</label> : '';
        return (
            <div>
                { label }
                <input id={ this.id } type="text" placeholder={ this.props.placeholder } value={ this.state.value } onChange={ this.onChange } />
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