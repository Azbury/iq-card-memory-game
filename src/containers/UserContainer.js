import React, { Component } from 'react'
import SignupInput from '../components/SignupInput'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'
import NewUserButton from '../components/NewUserButton'
import User from '../components/User'
import { checkTopIqs } from '../actions/checkTopIqs'
import NewGameButton from '../components/NewGameButton'
import ViewLeaderboardButton from '../components/ViewLeaderboardButton'

class UserContainer extends Component {
    render () {
        return (
            <div className="user-container">
                <div className="title">IQ Card Memory Game</div>
                {!this.props.userSubmitted && <SignupInput addUser={this.props.addUser}/>}
                {this.props.userSubmitted && <NewGameButton/>}
                <br></br>
                {this.props.userSubmitted && <User currentUser={this.props.currentUser} iqs={this.props.iqs} checkTopIqs={this.props.checkTopIqs}/>}
                {this.props.userSubmitted && <NewUserButton newUser={this.props.newUser}/>}
                <br></br>
                <br></br>
                {this.props.userSubmitted && <ViewLeaderboardButton/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, userSubmitted: state.userSubmitted, currentCards: state.currentCards, iqs: state.userTopIqs})

const mapDispatchToProps = dispatch => ({
    addUser: username => dispatch(addUser(username)),
    newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
    checkTopIqs: userId => dispatch(checkTopIqs(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)