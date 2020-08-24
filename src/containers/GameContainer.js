import React, { Component } from 'react'
import Cards from '../components/Cards'
import { connect } from 'react-redux'
import StartGameInput from '../components/StartGameInput'
import { addUser } from '../actions/addUser'
import SubmitScore from '../components/SubmitScore'
import { addIq } from '../actions/addIq'

class GameContainer extends Component {
    render () {
        return (
            <div className="game-container">
                <StartGameInput addCards={this.props.addCards}/>
                <SubmitScore addIq={this.props.addIq} currentCards={this.props.currentCards} iq={this.props.iq} currentUser={this.props.currentUser.id}/>
                {this.props.gameStarted && <Cards isMatch={this.props.isMatch} currentCards={this.props.currentCards} flipCards={this.props.flipCards} flipCard={this.props.flipCard}/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({ currentUser: state.currentUser, submitted: state.submitted, gameStarted: state.gameStarted, currentCards: state.currentCards, iq: state.iq, 
    showUser: state.showUser, submitNewScore: state.submitScore
})

const mapDispatchToProps = dispatch => ({
    addUser: username => dispatch(addUser(username)),
    addIq: (iq, user_id)=> dispatch(addIq(iq, user_id)),
    newUser: username => dispatch({type: 'NEW_USER_BUTTON', username}),
    isMatch: imageid => dispatch({type: 'IS_MATCH', imageid}),
    addCards: cards => dispatch({type: 'ADD_CARDS', cards}),
    flipCards: frontSideUp => dispatch({type: 'FLIP_CARDS', frontSideUp}),
    flipCard: animal => dispatch({type: 'FLIP_CARD', animal})
})

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)