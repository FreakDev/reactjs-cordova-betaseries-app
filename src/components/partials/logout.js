import React from 'react';

import { Link } from 'react-router';
import { connect } from 'react-redux';

import { triggerAction } from '../../reducers';
import { actions as userActions } from '../../reducers/user';


class Logout extends React.Component {

    render() {
        return (
            <Link onClick={ this.props.onClick } to="/login">Logout</Link>
        )
    }
}

export default connect( (state) => ({

}), (dispatch) => ({
    onClick: () => {
        dispatch(triggerAction(userActions.USER_LOGOUT))
    }
}) )(Logout)