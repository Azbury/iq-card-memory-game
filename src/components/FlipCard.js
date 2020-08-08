import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import QuestionMark from '../pictures/questionmark.png'
import SmileyFace from '../pictures/smileyface.png'
const Animal = require.context('./animals', true)

class FlipCard extends Component {

  handleClick(e) {
    e.preventDefault()
    this.props.flipCard(this.props.id)
    setTimeout(() => this.props.isMatch(this.props.animal), 2000)
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.props.isFlipped} flipDirection="vertical">
          <div>
            <img className="dog-pic" src={QuestionMark} alt={'question mark'}></img>
          <button onClick={(event) => this.handleClick(event)}>Click to flip</button>
          </div>
 
          <div className="back-card">
            <img id={this.props.id} className="cat-pic" src={this.props.animal === "" ? SmileyFace : Animal(`./${this.props.animal}.png`)} alt={'pic'}></img>
          </div>
      </ReactCardFlip>
    )
  }
}

export default FlipCard;