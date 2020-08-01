import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import QuestionMark from '../pictures/questionmark.png'
const Animal = require.context('./animals', true)


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
    this.props.isMatch(this.props.id)
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped}));
  }

  render() {
    return (
      <ReactCardFlip className={this.props.removeCards === "true" ? "hidden" : ""} isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div>
            <img className="dog-pic" src={QuestionMark} alt={'question mark'}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
 
          <div className="back-card">
            <img id={this.props.id} className="cat-pic" src={Animal(`./${this.props.animal}.png`)} alt={'pic'}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;