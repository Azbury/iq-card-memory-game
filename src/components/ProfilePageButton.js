import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

//ProfilePageButton
//Button for going back to the profile page on the game page and leaderboard page.
class ProfilePageButton extends Component {

    handleClick(event) {
        event.preventDefault()
        //Removes submit IQ Score button from game page so when you go back to game page it is not already there.
        this.props.stopGame()
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link" to="/user">Profile Page</NavLink></button>
            </div>
        )
    }
}

export default ProfilePageButton