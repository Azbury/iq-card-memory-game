import React, { Component } from 'react';


class StartGameInput extends Component {

    state={
        cards:this.shuffle(['camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger', 'camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']),
        hideCardsButton: false,
        hideStartGame: true
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
    }

    handleSubmitForCards(event) {
        event.preventDefault()
        this.props.addCards(this.state.cards)
        this.setState({...this.state, hideCardsButton: true, hideStartGame: false})
    }

    startGame(event) {
        event.preventDefault()
        this.setState({...this.state, hideStartGame: true})
    }

    render () {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmitForCards(event)} className={this.state.hideCardsButton === false ? "" : "hidden"}>
                    <input type="submit" value="Look At Cards"/>
                </form>
                <form onSubmit={(event) => this.startGame(event)} className={this.state.hideStartGame === false ? "" : "hidden"}>
                    <input type="submit" value="Start Game"/>
                </form>
            </div>
        )
    }
}

export default StartGameInput
//button to start the game, this will have a handleSubmit function that will load the cards to the state.
//the cards will be put together and shuffled in here and then sent to the state to be rendered in that order.
//that way each time the cards are rendered they are rendered in the right order because the order is coming from the store
//each time