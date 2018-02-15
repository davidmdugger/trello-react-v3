import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  deleteCard(id){
    // console.log("test");
    this.props.onDelete(id);
  }

  render() {
    // console.log('Props from Card.js', this.props);
    return (
      <div className="Card">
        <p>{this.props.card.title}
          <span className="tooltip" onClick={this.deleteCard.bind(this, this.props.card.id)}>
            X
            <span className="tooltipText">
              Delete "{this.props.card.title}" Card
            </span>
          </span>
        </p>
        <p>{this.props.card.description}</p>
      </div>
    );
  }
}

export default Card;
