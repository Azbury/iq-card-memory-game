import React, { Component } from 'react'
import Cards from '../components/Cards'
import SignupInput from '../components/SignupInput'
import User from '../components/User'
import { connect } from 'react-redux'
import StartGameInput from '../components/StartGameInput'
import { addUser } from '../actions/addUser'

class CardsContainer extends Component {

    render() {
        return (
            <div className='final-container'>
              <h1>IQ Card Memory Game</h1>
              <SignupInput addUser={this.props.addUser} newUser={this.props.newUser}/>
              {this.props.submitted && <User currentUser={this.props.currentUser} iq={this.props.iq}/>}
              {this.props.submitted && <StartGameInput addCards={this.props.addCards}/>}
              {this.props.gameStarted && <Cards isMatch={this.props.isMatch} currentCards={this.props.currentCards} flipCards={this.props.flipCards} flipCard={this.props.flipCard}/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted, gameStarted: state.gameStarted, currentCards: state.currentCards, iq: state.iq })

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch(addUser(username)),
  newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
  isMatch: imageid => dispatch({type: 'IS_MATCH', imageid}),
  addCards: cards => dispatch({type: 'ADD_CARDS', cards}),
  flipCards: frontSideUp => dispatch({type: 'FLIP_CARDS', frontSideUp}),
  flipCard: animal => dispatch({type: 'FLIP_CARD', animal})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)