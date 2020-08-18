import React, { Component } from 'react';
import {v1 as uuid} from "uuid";

class StartGameInput extends Component {

    state={
        cards:this.shuffle(['camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger', 'camel', 'cat', 'dog', 'giraffe', 'hippo', 'lion', 'mouse', 'ostrich', 'raccoon', 'tiger']).map(e => { return {name: e, flipped: true, id: uuid()}}),
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
    }

    render () {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmitForCards(event)}>
                    <input type="submit" value="Look At Cards"/>
                </form>
            </div>
        )
    }
}

export default StartGameInput