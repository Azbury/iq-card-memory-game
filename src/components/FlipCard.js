import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import QuestionMark from '../pictures/questionmark.png'
import SmileyFace from '../pictures/smileyface.png'
const Animal = require.context('./animals', true)

//FlipCard
//Holds pictures for cards as well as the ability flip the card over. Call isMatch after a 2 second timeout to check if 2 cards match when they are flipped.
class FlipCard extends Component {

  handleClick(e) {
    e.preventDefault()
    this.props.flipCard(this.props.id)
    //Has a 2 second delay so that a user has a chance to see the cards if they match incorrectly.
    setTimeout(() => this.props.isMatch(this.props.animal), 2000)
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.props.isFlipped} flipDirection="vertical">
          <div>
            <img className="card" src={QuestionMark} alt={'question mark'}></img>
          <button className="small-button" onClick={(event) => this.handleClick(event)}>Click to Flip</button>
          </div>
 
          <div className="back-card">
            <img id={this.props.id} className="card" src={this.props.animal === "" ? SmileyFace : Animal(`./${this.props.animal}.png`)} alt={'pic'}></img>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;