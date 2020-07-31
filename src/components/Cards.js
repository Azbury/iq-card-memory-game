import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    state={
        flippedCard: 0
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.flippedCards[0] === nextProps.flippedCards[1])
            return true
        else {
            return false
        }
    }

    render() {
        
        let animals = ['camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']

        let cards = animals.map((animal, index) => <FlipCard animal={animal} id={index} isMatch={this.props.isMatch}/>)
        let finalCards = this.shuffle([...cards, ...cards])
        
        return(
            <div className="big-card-container">
                <div className="cards-container">
                    {finalCards[0]}
                    {finalCards[1]}
                    {finalCards[2]}
                    {finalCards[3]}
                </div>
                <div className="cards-container">
                    {finalCards[4]}
                    {finalCards[5]}
                    {finalCards[6]}
                    {finalCards[7]}
                </div>
                <div className="cards-container">
                    {finalCards[8]}
                    {finalCards[9]}
                    {finalCards[10]}
                    {finalCards[11]}
                </div>
                <div className="cards-container">
                    {finalCards[12]}
                    {finalCards[13]}
                    {finalCards[14]}
                    {finalCards[15]}
                </div>
                <div className="cards-container">
                    {finalCards[16]}
                    {finalCards[17]}
                    {finalCards[18]}
                    {finalCards[19]}
                </div>
            </div>
        )
    }
}
  
export default Cards;