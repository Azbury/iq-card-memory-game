import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    state = {
        isFlipped: true,
        hideFlipCardsBack: false,
        initialFlip: false
    }

    flipCardsBack(event) {
        event.preventDefault()
        this.props.flipCards(this.state.initialFlip)
        this.setState({ isFlipped: false, hideFlipCardsBack: true, initialFlip: true, hideStartGame: false})
    }

    //get cards to flip over after getting a wrong answer

    render() {
        
        let animals = this.props.currentCards

        let cards = animals.map((animal, index) => <FlipCard animal={animal.name} id={index} isMatch={this.props.isMatch} isFlipped={animal.flipped} initialFlip={this.state.initialFlip} flipCard={this.props.flipCard}/>)
        let finalCards = cards
        
        //cards need to be able to flip on their own individual not just being set from the state of this component

        return(
            <div>
                <form onSubmit={(event) => this.flipCardsBack(event)} className={this.state.hideFlipCardsBack === false ? "" : "hidden"}>
                    <input type="submit" value="Start Game"/>
                </form>
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
            </div>
        )
    }
}
  
export default Cards;