import React from 'react';
import { connect } from 'react-redux';

class Layout extends React.Component {
  static propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
  }

  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
    if (this.props.isLoggedIn && !nextProps.isLoggedIn) {
      this.context.router.push('/login');
    } else if (!this.props.isLoggedIn && nextProps.isLoggedIn) {
      this.context.router.push('/');
    }
  }

  render() {
    return this.props.children;
  }
}

export default connect(state => (
    {isLoggedIn: state.isLoggedIn}
))(Layout);
