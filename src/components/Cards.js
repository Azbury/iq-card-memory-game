import React, { Component } from 'react';
import FlipCard from './FlipCard'

class Cards extends Component {

    state = {
        isFlipped: true,
        hideStartGame: false
    }

    startGame(event) {
        event.preventDefault()
        this.setState({ isFlipped: false, hideStartGame: true})
    }

    render() {
        
        let animals = this.props.currentCards

        let cards = animals.map((animal, index) => <FlipCard animal={animal} id={index} isMatch={this.props.isMatch} isFlipped={this.state.isFlipped}/>)
        let finalCards = cards
        
        //cards need to be able to flip on their own individual not just being set from the state of this component

        return(
            <div className="big-card-container">
                <form onSubmit={(event) => this.startGame(event)} className={this.state.hideStartGame === false ? "" : "hidden"}>
                    <input type="submit" value="Start Game"/>
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