import React from 'react';

export default class Layout extends React.Component {
    duplicateChildren() {
        if (this.props.children) {
            return React.cloneElement(this.props.children, { key: this.props.location.pathname });
        }
    }

    render() {
        return (
            <div className="pages-container">
                {this.duplicateChildren()}
            </div>
        )
    }
}