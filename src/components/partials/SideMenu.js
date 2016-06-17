import React from 'react';
import { connect } from 'react-redux';

import { triggerAction } from '../../reducers';
import { actions } from '../../reducers/sidemenu';

var menuWrapperRefStyle = {
  position: "absolute",
  top: "0",
  left: "-95%",
  width: "100%",
  height: "100%",
  zIndex: 10
}

var sideMenuRefStyle = {
  position: "relative",
  width: "80%",
  height: "100%",
  left:"-80%",
  backgroundColor: "white",
  transition: "all 0.7s",
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  render() {

    var menuWrapperStyle = Object.assign({}, menuWrapperRefStyle, { left: this.props.sideMenuOpen ? "0" : "-95%", backgroundColor: this.props.sideMenuOpen ? "rgba(0,0,0,0.7)" : ""});
    var sideMenuStyle = Object.assign({}, sideMenuRefStyle, { left: this.props.sideMenuOpen ? "0" : "-80%"});

    return (
      <div onClick={ this.props.onClick } style={ menuWrapperStyle } className="side-menu">
        <div style={ sideMenuStyle }>
            { this.props.children }
        </div>
      </div>
    )

  }
}

export default connect((state) => ({
  sideMenuOpen: state.sidemenu.open
}), (dispatch) => ({
  onClick: () => { dispatch(triggerAction(actions.SIDEMENU_TRIGGER)) }
}))(Layout)

