import React from 'react';

import InputText from '../forms/InputText'

const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px"
}

const inputStyle = {
    display: "block",
    fontSize: "16px",
    fontWeight: "300",
    width: "100%",
    height: "45px",
    margin: "0",
    padding: "0 45px 0 45px",
    border: "0",
    boxShadow: "none"
}

export default class SearchBar extends React.Component {

    constructor(props) {
        super(props)

        this.onChange = this.onChange.bind(this)

        this.state = { value: this.props.value || "" }
    }

    onChange(e) {
        this.setState({value: e.target.value})
        if(this.props.onChange)
            this.props.onChange(e)
    }

    render() {
        return (
            <div style={ this.props.style } className="search-wrapper card">
                <InputText placeholder="Search" onChange={ this.onChange } value={ this.state.value } style={ inputStyle } id="search" name="search" noWrapper="false" /><i  style={ iconStyle } className="material-icons">search</i>
            </div>
        )
    }
}
