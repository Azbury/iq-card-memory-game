import React, { Component } from 'react'
import SignupInput from '../components/SignupInput'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'
import NewUserButton from '../components/NewUserButton'
import User from '../components/User'
import { checkTopIqs } from '../actions/checkTopIqs'
import CheckTopIqsButton from '../components/CheckTopIqsButton'

class UserContainer extends Component {
    render () {
        return (
            <div className="user-container">
                {!this.props.userSubmitted && <SignupInput addUser={this.props.addUser}/>}
                {this.props.userSubmitted && <NewUserButton newUser={this.props.newUser}/>}
                {this.props.userSubmitted && <User currentUser={this.props.currentUser}/>}
                {this.props.userSubmitted && <CheckTopIqsButton checkTopIqs={this.props.checkTopIqs}/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, userSubmitted: state.userSubmitted, gameStarted: state.gameStarted, currentCards: state.currentCards, iq: state.iq, 
                                    showUser: state.showUser, submitNewScore: state.submitScore
})

const mapDispatchToProps = dispatch => ({
    addUser: username => dispatch(addUser(username)),
    newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
    checkTopIqs: iqs => dispatch(checkTopIqs(iqs))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)