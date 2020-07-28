import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

class PictureCard extends Component {

  render() {
   

    return (
      <div>
        <Card className="picture-card" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>hi</Card>
          
      </div>
    );
  }
};

export default PictureCard;