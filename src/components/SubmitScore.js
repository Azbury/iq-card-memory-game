import React, { Component } from 'react';

//SubmitScore
//Button used to submit a score when done the game
class SubmitScore extends Component {

    state = {
        gameDone: false
    }

    handleSubmit(event) {
        event.preventDefault()
        //checking to see if game is complete or not before submitting.
        if (this.props.currentCards.every(e => e.flipped === true)) {
            this.props.addIq(this.props.iq, this.props.currentUser)
            this.setState({
                gameDone: false
            })
        } else {
            this.setState({
                gameDone: true
            })
        }
    }

    render () {
        return (
            <div>
                <h1 className={this.state.gameDone === false ? "hidden" : ""}>You are not done the game yet!</h1>
                <button className="button" onClick={(event) => this.handleSubmit(event)}>Submit IQ Score</button>
            </div>
        )
    }
}

export default SubmitScore