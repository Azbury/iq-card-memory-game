import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import QuestionMark from '../pictures/questionmark.png'
import SmileyFace from '../pictures/smileyface.png'
const Animal = require.context('./animals', true)

class FlipCard extends Component {
  //the constructor is only called at the creation of the component so i can not use that to update the state from the props of Cards.js
  constructor(props) {
    super(props);
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault()
    this.props.flipCard(this.props.id)
    setTimeout(() => this.props.isMatch(this.props.animal), 5000)
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped}));
  }
  //next step is to make it so when to cards match they disappear now, just take them out of the state when 2 cards match now

  render() {
    return (
      <ReactCardFlip isFlipped={this.props.isFlipped} flipDirection="vertical">
          <div>
            <img className="dog-pic" src={QuestionMark} alt={'question mark'}></img>
          <button onClick={this.handleClick}>Click to flip</button>
          </div>
 
          <div className="back-card">
            <img id={this.props.id} className="cat-pic" src={this.props.animal === "" ? SmileyFace : Animal(`./${this.props.animal}.png`)} alt={'pic'}></img>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;