import React, { Component } from 'react';
import FlipCard from '../components/FlipCard'

//Cards
class CardsContainer extends Component {

    state = {
        hideFlipCardsBack: false,
    }

    flipCardsBack(event) {
        event.preventDefault()
        this.props.flipCards(this.state.initialFlip)
        this.setState({hideFlipCardsBack: true})
    }

    render() {
        let cards = this.props.currentCards.map(animal => <FlipCard animal={animal.name} id={animal.id} isMatch={this.props.isMatch} isFlipped={animal.flipped} flipCard={this.props.flipCard}/>)

        return(
            <div>
                <form onSubmit={(event) => this.flipCardsBack(event)} className={this.state.hideFlipCardsBack === false ? "" : "hidden"}>
                    <input className="button" type="submit" value="Start Game"/>
                </form>
                <div className="big-card-container">
                    <div className="cards-container">
                        {cards[0]}
                        {cards[1]}
                        {cards[2]}
                        {cards[3]}
                    </div>
                    <div className="cards-container">
                        {cards[4]}
                        {cards[5]}
                        {cards[6]}
                        {cards[7]}
                    </div>
                    <div className="cards-container">
                        {cards[8]}
                        {cards[9]}
                        {cards[10]}
                        {cards[11]}
                    </div>
                    <div className="cards-container">
                        {cards[12]}
                        {cards[13]}
                        {cards[14]}
                        {cards[15]}
                    </div>
                    <div className="cards-container">
                        {cards[16]}
                        {cards[17]}
                        {cards[18]}
                        {cards[19]}
                    </div>
                </div>
            </div>
        )
    }
}
  
export default CardsContainer