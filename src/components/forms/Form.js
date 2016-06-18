
import React, { PropTypes } from 'react';
import AbstractField from './AbstractField';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.formData = {};

        // bindings
        this.onSubmit = this.onSubmit.bind(this);
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

    onSubmit(e) {
        var errors = [];
        var values = {};

        this.props.children.forEach((child) => {
            if (child.props.name) {
                if (child.props.validator) {
                    let err = child.props.validator(this.formData[child.props.name].value, child.props.validatorRules || {});
                    if (!err.length) {
                        values[child.props.name] = this.formData[child.props.name].value;
                    }
                    errors = [...errors, ...err];                    
                } else {
                    values[child.props.name] = this.formData[child.props.name].value;                    
                }
            }
        });

        this.setState({ hasErrors: !!errors.length });

        if (!errors.length) {
            if (this.props.onSubmit) {
                e.preventDefault();
                this.props.onSubmit(values);
            }
        }
    }

    renderChildren(children) {
        const newChild = React.Children.map(children, (child) => {
            let newValue = this.formData[child.props.name] ? this.formData[child.props.name].value : "";
            return React.cloneElement(child, {value: newValue });
        });

        return newChild;
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                { this.renderChildren(this.props.children) }
                <div className="input-field">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            </form>
        )
    }
}
