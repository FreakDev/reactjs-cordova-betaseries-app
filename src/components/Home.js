import React from 'react';

import Header from './partials/header';

import ShowsList from './ShowsList';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <ShowsList />
            </div>
        )
    }
}