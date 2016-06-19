import React from 'react';

import { connect } from 'react-redux';

import BetaSeries from '../BetaSeries';
import { default as APICONF } from '../apikey';

import { default as showsActions } from '../reducers/showsActions'
import { actions } from '../reducers/sidemenu';
import { triggerAction } from '../reducers';

import SearchBar from './partials/searchbar';
import CardsList from './partials/cardslist';


const menuTriggerStyle = {
    position: "absolute",
    top: "35px",
    left: "10px",
    color: "black"
}

class Search extends React.Component {

    render() {
        return (
            <div className="container">
                <div style={{ position:"relative" }}>
                    <SearchBar style={{top: "25px"}} onChange={ this.props.onChange } />
                    <a style={ menuTriggerStyle } href="#" onClick={ this.props.menuTrigger } className="button-collapse top-nav hide-on-large-only"><i className="material-icons">menu</i></a>
                </div>
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

    },
    menuTrigger: (e) => {
        dispatch(triggerAction(actions.SIDEMENU_TRIGGER));
        e.preventDefault();
    }
}))(Search)