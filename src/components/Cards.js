import React, { Component } from 'react';
import Card from './PictureCard'

class Cards extends Component {

    render() {
        
        let cards = []

        for (let i = 0; i < 5; i++) {
            cards.push(<Card />)
        }

        return(
            <div className="big-card-container">
                <div className="cards-container">
                    {cards}
                </div>
                <div className="cards-container2">
                    {cards}
                </div>
                <div className="cards-container3">
                    {cards}
                </div>
                <div className="cards-container4">
                    {cards}
                </div>
            </div>
        )
    }
}
  
export default Cards;