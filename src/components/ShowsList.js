import React from 'react';

import { connect } from 'react-redux';

import CardsList from './partials/cardslist';

import { triggerAction } from '../reducers';
import { default as showsAction, refreshList } from '../reducers/showsActions';

class ShowsList extends CardsList {
    componentWillMount() {
        this.props.refresh(this.props.uid, this.props.dispatch);
    }
}

export default connect(function (state) {
    return {
        uid: state.user.infos.id,
        items: state.shows.list
    }
}, function (dispatch) {
    return {
        dispatch: dispatch,
        refresh: refreshList
    }
})(ShowsList)