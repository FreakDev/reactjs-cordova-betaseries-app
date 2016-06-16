import React from 'react';

var headerStyle = {
    "position": "fixed",
    "top": 0
}

export default class Header extends React.Component {

    render() {
        return (
          <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo center">Previously On</a>
            </div>
          </nav>
        )
    }
}