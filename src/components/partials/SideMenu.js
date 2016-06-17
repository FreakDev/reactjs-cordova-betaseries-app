import React from 'react';
import { connect } from 'react-redux';

import { triggerAction } from '../../reducers';
import { actions } from '../../reducers/sidemenu';

import { Link } from 'react-router';

const menuWrapperRefStyle = {
  position: "absolute",
  top: "0",
  left: "-98%",
  width: "100%",
  height: "100%",
  zIndex: 10,
  transition: "background-color 0.1s",
}

const sideMenuRefStyle = {
  position: "relative",
  width: "65%",
  height: "100%",
  left:"-65%",
  backgroundColor: "white",
  transition: "all 0.7s",
}

const sideNavStyle = {
  left: "105%",
  position: "relative",
  boxShadow: "none",
  width: "100%"
}


const itemStyle = {
  width: "100%"
}

class Layout extends React.Component {

  constructor(props) {
    super(props);
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  render() {

    var menuWrapperStyle = Object.assign({}, menuWrapperRefStyle, { left: this.props.sideMenuOpen ? "0" : "-98%", backgroundColor: this.props.sideMenuOpen ? "rgba(0,0,0,0.7)" : ""});
    var sideMenuStyle = Object.assign({}, sideMenuRefStyle, { left: this.props.sideMenuOpen ? "0" : "-65%"});

    let id = 0;
    return (
      <div onClick={ this.props.onClick } style={ menuWrapperStyle } className="side-panel">
        <div style={ sideMenuStyle }>
          <ul className="side-nav" style={ sideNavStyle }>
            { this.props.items.map((item) => (
              <li style={itemStyle} key={ id++ } className="no-padding waves-effect waves-teal">
                <Link style={ itemStyle } to={"/" + item.toLowerCase()}>{item}</Link>
              </li>
            ))}
          </ul>
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

