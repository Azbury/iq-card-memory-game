import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NewGameButton extends Component {

    handleClick(event) {
        event.preventDefault()
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