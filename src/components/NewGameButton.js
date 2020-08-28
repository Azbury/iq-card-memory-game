import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {v1 as uuid} from "uuid"

class NewGameButton extends Component {

    state = {
        cards:this.shuffle(['camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger', 'camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']).map(e => { return {name: e, flipped: true, id: uuid()}}),
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