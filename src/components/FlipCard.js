import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import Dog from '../dog.png'
import Cat from '../cat.png'

class FlipCard extends Component {
 constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }
 
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
            <img className="dog-pic" src={Dog}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
 
          <div>
            <img className="cat-pic" src={Cat}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;