import React, { Component } from 'react';
import Card from '../Card/Card';
import './CardDisplay.css';

class CardDisplay extends Component {
  deleteCard(id){
    this.props.onDelete(id);
  }

  render() {
    let cards;
    if(this.props.cards){
      cards = this.props.cards.map(card => {
        // console.log('mapping each card from Card.js', card);
        return (
          // pass through each card as the prop card so I can use in Card.js
          <Card onDelete={this.deleteCard.bind(this)} key={card.title} card={card}/>
        )
      });
    }
    // console.log('Props from CardDisplay.js', this.props);
    return (
      <div className="CardDisplay">
        {cards}
      </div>
    );
  }
}

export default CardDisplay;
