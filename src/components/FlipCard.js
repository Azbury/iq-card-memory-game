import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import QuestionMark from '../pictures/questionmark.png'
const Animal = require.context('./animals', true)


class FlipCard extends Component {
  
 constructor() {
    super();
      this.state = {
      isFlipped: false,
      value: 3
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped}));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
            <img className="dog-pic" src={QuestionMark}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
 
          <div>
            <img id={this.props.id} className="cat-pic" src={Animal(`./${this.props.animal}.png`)}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;