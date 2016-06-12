import React from 'react';
import { connect } from 'react-redux';

export default class Layout extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  render() {
    return (
      <div className="container">
        { this.props.children }
      </div>
    )

  }
}