import React, { Component } from 'react';

class SubmitScore extends Component {

    state = {
        gameDone: false
    }

    handleSubmit(event) {
        event.preventDefault()
        //if (this.props.currentCards.every(e => e.flipped === true)) {
            this.props.addIq(this.props.iq, this.props.currentUser)
            //this.setState({
                //gameDone: false
            //})
        //} else {
            //this.setState({
                //gameDone: true
            //})
        //}
    }

    render () {
        return (
            <div>
                <h1 className={this.state.gameDone === false ? "hidden" : ""}>You are not done the game yet!</h1>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input className="button" type="submit" value="Submit IQ Score"/>
                </form>
            </div>
        )
    }
}

export default SubmitScore