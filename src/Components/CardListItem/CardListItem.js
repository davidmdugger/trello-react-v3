import React, { Component } from 'react';
// import './Card.css';

class CardListItem extends Component {
  render() {
    // console.log('Props from Card.js', this.props);
    return (
      <div>
        <p>{this.props.card.title}</p>
        <p>{this.props.card.description}</p>
      </div>
    );
  }
}

export default CardListItem;
