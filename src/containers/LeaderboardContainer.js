import React, { Component } from 'react'
import ProfilePageButton from '../components/ProfilePageButton'

class LeaderboardContainer extends Component {

    state = {
        users: []
    }

    compare(a, b) {
        const topIqA = a.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]
        const topIqB = b.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]
      
        let comparison = 0;
        if (topIqA > topIqB) {
          comparison = 1;
        } else if (topIqA < topIqB) {
          comparison = -1;
        }
        return comparison * -1;
    }

    render () {
        let userArray = this.state.users.sort(this.compare).map(user => 
                        <div><div className="leaderboard-user"><div className="leaderboard-username">{user.username}</div><br></br>Top IQ Score<div>{user.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]}</div></div><br></br></div>
                                            )

        return (
            <div className="leaderboard-container">
                <div className="title">IQ Card Memory Game</div>
                <ProfilePageButton/>
                <div className="leaderboard-title">Leaderboard</div>
                <br></br>
                <div className="leaderboard-user-container">{userArray}</div>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://localhost:3000/users')
          .then(response => response.json())
          .then(users => {
              this.setState({
                users: users
                })
          })
    }
}

export default LeaderboardContainer