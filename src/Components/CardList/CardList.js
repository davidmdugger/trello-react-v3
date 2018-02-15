import React, { Component } from 'react';
import Card from '../Card/Card';
import CardListItem from '../CardListItem/CardListItem';
import './CardList.css';

class CardList extends Component {
  render() {
    let cards;
    if(this.props.cards){
      cards = this.props.cards.map(card => {
        // console.log('mapping each card from CardList.js', card);
        return (
          // pass through each card as the prop card so I can use in Card.js
          <CardListItem key={card.title} card={card}/>
        )
      });
    }
    // console.log('Props from CardDisplay.js', this.props);
    return (
      <div className="CardList">
        {cards}
      </div>
    );
  }


  // render() {
  //   // console.log('Props from Card.js', this.props);
  //   return (
  //     <div className="CardList">
  //       <p>{this.props.cards[0].title}</p>
  //       {/* <p>{this.props.card.description}</p> */}
  //     </div>
  //   );
  // }
}

export default CardList;
