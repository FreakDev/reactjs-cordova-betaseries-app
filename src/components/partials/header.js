import React from 'react';

import { connect } from 'react-redux';

import { actions } from '../../reducers/sidemenu';
import { triggerAction } from '../../reducers';


var headerStyle = {
    "position": "fixed",
    "top": 0,
    "zIndex": 5
}

class Header extends React.Component {

    render() {
        return (
          <nav style={ headerStyle } >
            <div className="container">
              <a href="#" onClick={ this.props.menuTrigger } className="button-collapse top-nav hide-on-large-only"><i className="material-icons">menu</i></a>
              <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Previously On</a>
              </div>
            </div>
          </nav>
        )
    }
}

export default connect((state) => ({}), (dispatch) => ({
  menuTrigger: function () {
    dispatch(triggerAction(actions.SIDEMENU_TRIGGER));
  }
}))(Header)
