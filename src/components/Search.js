import React from 'react';

import { connect } from 'react-redux';

import BetaSeries from '../BetaSeries';
import { default as APICONF } from '../apikey';

import { triggerAction } from '../reducers'
import { default as showsActions } from '../reducers/showsActions'

import SearchBar from './partials/searchbar';
import CardsList from './partials/cardslist';


class Search extends React.Component {

    render() {
        return (
            <div className="container">
                <SearchBar style={{top: "25px"}} onChange={ this.props.onChange } />
                <CardsList items={ this.props.items } />
            </div>
        )
    }
}

export default connect((state) => ({
    items: state.search.shows
}), (dispatch) => ({
    onChange: (e) => {
        dispatch(triggerAction(showsActions.SHOWS_SEARCH));

        const bs = BetaSeries.getInstance(APICONF.key)

        bs.searchShows(e.target.value).then((data) => {
            dispatch(triggerAction(showsActions.SHOWS_SEARCH_DONE, data))
        }, () => {
            dispatch(triggerAction(showsActions.SHOWS_SEARCH_FAIL))
        })

    }
}))(Search)