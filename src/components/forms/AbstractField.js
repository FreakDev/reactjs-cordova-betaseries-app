import React, { PropTypes } from 'react';


export default class AbstractField extends React.Component {

    constructor(props, context) {
        let newProps = Object.assign({}, {validate : () => {
            this.onChange.bind(this);

            return !!this.state.errors.length;
        }});

        super(newProps, context);

        this.id = props.name + "-" + Date.now();

        // bindings
        this.onChange = this.onChange.bind(this);

    }

    state = { value: "", errors: [] }

    static contextTypes = {
        formData: PropTypes.object.isRequired,
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        validator: PropTypes.func,
        validatorRules: PropTypes.object,
        value: PropTypes.string
    }

    componentWillMount () {
        this.setState({value:this.props.value});

        this.context.formData[this.props.name] = this.state;
    }

    setState(state) {

        if (this.props.validator && state.value) {
            state.errors = this.props.validator(state.value, this.props.validatorRules);
        }

        super.setState(state)
    }

    componentWillReceiveProps (nextProps) {
        if (this.context.formData[this.props.name]) {
            this.setState(this.context.formData[this.props.name]);
        }
    }

    onChange(e) {
        var state = { value: e.target.value, errors: [] };
        this.setState(state);
        this.context.formData[this.props.name] = state;        
    }

    render() {
        throw Error('should not be instanciate directly');
    }

}