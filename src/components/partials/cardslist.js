import React from 'react';

import CardImage from './cardimage';

var listStyle = {
    "paddingTop": "70px"
}

export default class CardsList extends React.Component {

    render() {
        return (
            <div style={ listStyle } className="container">
                {
                    this.props.items.map((item) => {
                        return (
                            <CardImage key={ item.id } data={ item } />
                        );
                    })
                }
            </div>
        )
    }
}