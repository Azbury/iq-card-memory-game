import React, { Component } from 'react'
import SignupInput from '../components/SignupInput'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'
import NewUserButton from '../components/NewUserButton'
import User from '../components/User'
import { checkTopIqs } from '../actions/checkTopIqs'
import NewGameButton from '../components/NewGameButton'
import ViewLeaderboardButton from '../components/ViewLeaderboardButton'

class LeaderboardContainer extends Component {

    state = {
        users: []
    }

    compare(a, b) {
        const topIqA = a.iqs.sort(function(a, b){return b-a})[0]
        const topIqB = b.iqs.sort(function(a, b){return b-a})[0]
      
        let comparison = 0;
        if (topIqA > topIqB) {
          comparison = 1;
        } else if (topIqA < topIqB) {
          comparison = -1;
        }
        return comparison * -1;
    }

    render () {
        let sortedUsers = this.state.users.sort(this.compare)
        let userArray = sortedUsers.map(user => 
                        <div><div className="leaderboard-user"><div className="leaderboard-username">{user.username}</div><br></br>Top IQ Score<div>{user.iqs.map(iq => iq.iq).sort(function(a, b){return b-a})[0]}</div></div><br></br></div>
                                            ).sort()

        return (
            <div className="leaderboard-container">
                <div className="leaderboard-title">Leaderboard</div>
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

const mapStateToProps = state => ({ currentUser: state.currentUser, userSubmitted: state.userSubmitted, currentCards: state.currentCards, iqs: state.userTopIqs})

const mapDispatchToProps = dispatch => ({
    addUser: username => dispatch(addUser(username)),
    newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
    checkTopIqs: userId => dispatch(checkTopIqs(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LeaderboardContainer)