import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    state = {
        isFlipped: false
    }

    lookAtCards(event) {
        event.preventDefault()
        this.setState({ isFlipped: true})
    }

    render() {
        
        let animals = this.props.currentCards

        let cards = animals.map((animal, index) => <FlipCard animal={animal} id={index} isMatch={this.props.isMatch} isFlipped={this.state.isFlipped}/>)
        let finalCards = cards
        
        return(
            <div className="big-card-container">
                <h2>{cards.isFlipped}</h2>
                <h1>{this.state.isFlipped.toString()}</h1>
                <form className="look-at-cards" onSubmit={(event) => this.lookAtCards(event)}>
                    <input type="submit" value="Look at Cards"/>
                </form>
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