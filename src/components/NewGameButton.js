import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {v1 as uuid} from "uuid"

//NewGameButton
//Button that will start a new game from the user profile page. This will add a new set of cards to game that will be randomized in order by the shuffle method.
class NewGameButton extends Component {

    state = {
        cards: this.shuffle(['camel', 'cat', 'dog', 'elephant', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger',
                            'camel', 'cat', 'dog', 'elephant', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']).map(e => { return {name: e, flipped: true, id: uuid()}}),
    }

    shuffle(cards) {
        var current = cards.length, temp, random;
      
        while (0 !== current) {
          random = Math.floor(Math.random() * current);
          current -= 1;
      
          temp = cards[current];
          cards[current] = cards[random];
          cards[random] = temp;
        }
      
        return cards;
    }

    handleClick(event) {
        event.preventDefault()
        this.props.addCards(this.state.cards)
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link" to="/game">Start New Game</NavLink></button>
            </div>
        )
    }
}

export default NewGameButton