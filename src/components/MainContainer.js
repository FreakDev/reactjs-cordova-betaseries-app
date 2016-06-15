import React from 'react';
import { connect } from 'react-redux';

class MainContainer extends React.Component {
  static propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isLoggedIn && !nextProps.isLoggedIn) {
      this.context.router.push('/login');
    } else if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this.context.router.push('/');
    }
  }

  render() {
    return (
      <div className="container">
        { this.props.children }
      </div>
    )
  }
}

export default connect(state => (
    { isLoggedIn: !!state.user.infos.login }
))(MainContainer);
