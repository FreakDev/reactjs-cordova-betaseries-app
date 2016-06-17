import React from 'react';
import { connect } from 'react-redux';

import { triggerAction } from '../reducers';
import { actions } from '../reducers/sidemenu';

import SideMenu from './partials/SideMenu';

var layoutStyle = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%"  
}

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentWillReceiveProps (nextProps) {
    sideMenuStyle.left = nextProps.sideMenuOpen ? "0" : "-80%";
  }

  render() {
    return (
      <div style={ layoutStyle } className="layout">
        <SideMenu />
        { this.props.children }
      </div>
    )

  }
}
