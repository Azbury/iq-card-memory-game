import React, { Component } from 'react'
import ProfilePageButton from '../components/ProfilePageButton'
import { connect } from 'react-redux'

//LeaderboardContainer
//Holds all the components for the leaderboard page
class LeaderboardContainer extends Component {

    state = {
        users: []
    }
    
    //compare method used in sort method to sort leaderboard in decending order by a users top iq score
    compare(a, b) {
        const topIqA = a.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]
        const topIqB = b.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]
      
        let comp = 0;
        if (topIqA > topIqB) {
          comp = 1;
        } else if (topIqA < topIqB) {
          comp = -1;
        }
        return comp * -1;
    }

    render () {
        //sorted user array
        let userArray = this.state.users
                        .sort(this.compare)
                        .map(user => 
                        <div><div className="leaderboard-user"><div className="leaderboard-username">{user.username}</div><br></br>Top IQ Score<div>{user.iqs.map(iq => iq.iq)
                        .sort(function(a, b){return b-a})[0]}</div></div><br></br></div>
                            )

        return (
            <div className="leaderboard-container">
                <div className="title">IQ Card Memory Game</div>
                <ProfilePageButton stopGame={this.props.stopGame}/>
                <div className="leaderboard-title">Leaderboard</div>
                <br></br>
                <div className="leaderboard-user-container">{userArray}</div>
            </div>
        )
    }

    //API call to load up all users
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

const mapDispatchToProps = dispatch => ({
    stopGame: () => dispatch({type: 'STOP_GAME'})
})

export default connect(null, mapDispatchToProps)(LeaderboardContainer)