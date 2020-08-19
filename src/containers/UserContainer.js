import React, { Component } from 'react'
import SignupInput from '../components/SignupInput'
import { connect } from 'react-redux'
import { addUser } from '../actions/addUser'

class UserContainer extends Component {
    render () {
        return (
            <SignupInput addUser={this.props.addUser} newUser={this.props.newUser}/>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted, gameStarted: state.gameStarted, currentCards: state.currentCards, iq: state.iq, 
                                    showUser: state.showUser, submitNewScore: state.submitScore
})

const mapDispatchToProps = dispatch => ({
    addUser: username => dispatch(addUser(username)),
    newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)