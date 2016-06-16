import React from 'react';

import CardImage from './cardimage';

export default class CardsList extends React.Component {

    render() {
        let i = 0;
        return (
            <div>
                {
                    this.props.items.map((item) => {
                        console.log("render item");
                        return (
                            <CardImage key={ i } title={ item.title } />
                        );
                        i++
                    })
                }
            </div>
        )
    }
}