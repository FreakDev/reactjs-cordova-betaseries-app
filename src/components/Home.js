import React from 'react';

import { connect } from 'react-redux';

import BetaSeries from '../BetaSeries';
import { default as APICONF } from '../apikey';

import { triggerAction } from '../reducers';
import { default as showsActions } from '../reducers/showsActions';

import Header from './partials/header';
import CardsList from './partials/cardslist';

class Home extends React.Component {

    componentWillMount() {
        this.props.willMount.call(this, this.props);
    }

    render() {
        return (
            <div>
                <Header />
                <CardsList items={ this.props.items } />
            </div>
        )
    }
}

export default connect((state) => ({
    items: state.shows.list,
    uid: state.user.infos.id
}), (dispatch) => ({
    willMount: (props) => {
        dispatch(triggerAction(showsActions.SHOWS_REFRESH))

        const bs = BetaSeries.getInstance(APICONF.key)

        bs.getMyShows(props.uid).then((data) => {
            dispatch(triggerAction(showsActions.SHOWS_LOAD_DONE, data))
        }, () => {
            dispatch(triggerAction(showsActions.SHOWS_LOAD_FAIL))
        })

    }
}))(Home)