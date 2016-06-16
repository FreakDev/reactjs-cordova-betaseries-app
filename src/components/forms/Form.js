
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

    state = {
        hasErrors: false
    }

    getChildContext() {
        return { formData: this.formData };
    }

    onClick() {
        var hasErrors = false;
        var values = {};

        let i = 0;
        this.props.children.forEach((child) => {
            if (child.props.validator) {
                hasErrors = !!child.props.validator(
                                this.formData[child.props.name].value, child.props.validatorRules || {})
                            || hasErrors;
            }
            i++
        });

        this.setState({hasErrors});

        !hasErrors && this.props.onSubmit(values);
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
