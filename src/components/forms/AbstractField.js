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
    }

    validate(val) {
        let errors, value = val === undefined ? this.state.value : val;
        if (this.props.validator && value !== undefined) {
            errors = this.props.validator(value, this.props.validatorRules);
            
        }
        this.setState({ errors });
        return !!errors.length
    }

    setState(state) {
        super.setState(state);
        this.context.formData[this.props.name] = Object.assign({}, this.context.formData[this.props.name], state);        
    }

    componentWillReceiveProps (nextProps) { 
        this.setState({ value: nextProps.value });
        this.validate(nextProps.value);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
        this.validate(e.target.value);
    }

    render() {
        throw Error('should not be instanciate directly');
    }

}