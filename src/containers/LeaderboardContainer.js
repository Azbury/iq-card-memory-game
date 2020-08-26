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

    render () {
        return (
            <div className="leaderboard-container">
                <div className="leaderboard-title">Top 20 Leaderboard</div>
                {this.state.users.map(user => <div>{user.username}{user.iqs.map(iq => iq.iq)}</div>)}
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