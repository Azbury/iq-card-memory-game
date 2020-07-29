import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    render() {
        
        let cards = []

        for (let i = 0; i < 4; i++) {
            cards.push(<FlipCard />)
        }

        return(
            <div className="big-card-container">
                <div className="cards-container">
                    {cards}
                </div>
                <div className="cards-container">
                    {cards}
                </div>
                <div className="cards-container">
                    {cards}
                </div>
                <div className="cards-container">
                    {cards}
                </div>
                <div className="cards-container">
                    {cards}
                </div>
            </div>
        )
    }
}
  
export default Cards;