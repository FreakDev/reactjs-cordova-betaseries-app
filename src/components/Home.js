import React from 'react';
import hashHistory from 'react-router';

export default class Home extends React.Component {


    componentWillMount () {
        hashHistory.push('/login');
    }

    render() {
        return (
            <div>
                home
            </div>
        )
    }
}