import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ViewLeaderboardButton extends Component {

    handleClick(event) {
        event.preventDefault()
    }

    render () {
        return (
            <div className="navbar">
                <button onClick={(event) => this.handleClick(event)} className="button"><NavLink className="link" to="/leaderboard">View Leaderboard</NavLink></button>
            </div>
        )
    }
}

export default ViewLeaderboardButton