import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    render() {
        
        let animals = ['camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']

        let cards = animals.map(animal => <FlipCard animal={animal}/>)

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