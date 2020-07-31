import React, { Component } from 'react'
import Cards from '../components/Cards'
import SignupInput from '../components/SignupInput'
import User from '../components/User'
import { connect } from 'react-redux'

class CardsContainer extends Component {
    render() {
        return (
            <div className='final-container'>
              <h1>IQ Card Memory Game</h1>
              <SignupInput addUser={this.props.addUser} newUser={this.props.newUserButton}/>
              {this.props.submitted && <User currentUser={this.props.users.find(user => user.id === this.props.currentUser)}/>}
              <Cards isMatch={this.props.isMatch} flippedCards={this.props.flippedCards}/>
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted, users: state.users, flippedCards: state.flippedCards })

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch({type: 'ADD_USER', username}),
  newUserButton: username => dispatch({type: 'NEW_USER_BUTTON', username}),
  isMatch: imageid => dispatch({type: 'IS_MATCH', imageid})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)