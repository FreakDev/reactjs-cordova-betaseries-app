import React from 'react';

import BetaSeries from '../../BetaSeries';

var bs = BetaSeries.getInstance();

export default class CardImage extends React.Component {

    render() {
        return (
            <div className="card">
              <div style={ { height: "150px", "overflow": "hidden" } } className="card-image waves-effect waves-block waves-light">
                <img style={ { "position": "absolute", "top": "-50%" } } className="activator" src={ bs.wrapApiKey("https://api.betaseries.com/pictures/shows?id=" + this.props.data.id) } />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{ this.props.data.title }<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">{ this.props.data.title }<i className="material-icons right">close</i></span>
                <p>{ this.props.data.description }</p>
              </div>
            </div>
        )
    }
}

