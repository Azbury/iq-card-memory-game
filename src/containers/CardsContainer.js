import React, { Component } from 'react'
import Cards from '../components/Cards'
import SignupInput from '../components/SignupInput'
import User from '../components/User'
import { connect } from 'react-redux'
import StartGameInput from '../components/StartGameInput'

class CardsContainer extends Component {

    render() {
        return (
            <div className='final-container'>
              <h1>IQ Card Memory Game</h1>
              <SignupInput addUser={this.props.addUser} newUser={this.props.newUserButton} addCards={this.props.addCards}/>
              {this.props.submitted && <User currentUser={this.props.users.find(user => user.id === this.props.currentUser)}/>}
              {this.props.submitted && <StartGameInput addCards={this.props.addCards}/>}
              {this.props.gameStarted && <Cards isMatch={this.props.isMatch} flippedCards={this.props.flippedCards} removeCards={this.props.removeCards} currentCards={this.props.currentCards} flipCards={this.props.flipCards} shouldCardsBeFlipped={this.props.shouldCardsBeFlipped}/>}
            </div>
        )
    }
}

//create new container for starting game

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted, users: state.users, flippedCards: state.flippedCards, removeCards: state.removeCards,
                                    gameStarted: state.gameStarted, currentCards: state.currentCards, shouldCardsBeFlipped: state.shouldCardsBeFlipped
                                  })

const mapDispatchToProps = dispatch => ({
  addUser: username => dispatch({type: 'ADD_USER', username}),
  newUserButton: username => dispatch({type: 'NEW_USER_BUTTON', username}),
  isMatch: imageid => dispatch({type: 'IS_MATCH', imageid}),
  addCards: cards => dispatch({type: 'ADD_CARDS', cards}),
  flipCards: cards => dispatch({type: 'FLIP_CARDS', cards})
})

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer)