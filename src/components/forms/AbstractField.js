import React, { PropTypes } from 'react';


export default class AbstractField extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.id = props.name + "-" + Date.now();

        this.state = { value: "", errors: [] };


        // bindings
        this.onChange = this.onChange.bind(this);

    }

    static contextTypes = {
        formData: PropTypes.object
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        validator: PropTypes.func,
        validatorRules: PropTypes.object
    }

    onChange(e) {
        var state = { value: e.target.value, errors: [] };
        if (this.props.validator && e.target.value) {
            state.errors = this.props.validator(e.target.value, this.props.validatorRules);
        }
        this.context.formData[this.props.name] = state;
        this.setState(state);
    }

    render() {
        throw Error('should not be instanciate directly');
    }

}