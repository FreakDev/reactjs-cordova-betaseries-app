
import React, { PropTypes } from 'react';
import AbstractField from './AbstractField';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.formData = {};

        // bindings
        this.onClick = this.onClick.bind(this);
    }

    static propTypes = {
        onSubmit: PropTypes.func,
    }

    static childContextTypes = {
        formData: PropTypes.object
    }

    getChildContext() {
        return { formData: this.formData };
    }

    onClick() {
        var hasErrors = false;
        var values = {};

        Object.keys(this.formData).forEach((key) => {
            var field = this.formData[key];
            if (field.errors.length) {
                hasErrors = true;
            } else {
                values[key] = field.value;
            }
        });

        if (!hasErrors) {
            this.props.onSubmit(values);
        }
    }

    render() {
        return (
            <div>
                { this.props.children }
                <button onClick={ this.onClick } className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
            </div>
        )
    }
}
