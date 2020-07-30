import React, { Component, Fragment } from 'react';
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard'
import BackCard from './BackCard'

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
          front
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
 
          <div>
          back
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;