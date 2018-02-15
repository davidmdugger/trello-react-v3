import React, { Component } from 'react';
import uuid from 'uuid';
import CardDisplay from './Components/CardDisplay/CardDisplay';
import NewCard from './Components/NewCard/NewCard';
// import CardList from './Components/CardList/CardList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cards: []
    }
  }

  componentWillMount(){
    this.setState({
      cards:
        [
          {
            id: uuid.v4(),
            title: "Card 1",
            description: "Descripton 1"
          },
          {
            id: uuid.v4(),
            title: "Card 2",
            description: "Descripton 2"
          },
          {
            id: uuid.v4(),
            title: "Card 3",
            description: "Descripton 3"
          }
        ]
    });
  }

  handleAddCard(newCard){
    // console.log(newCard);
    let cards = this.state.cards;
    cards.push(newCard);
    this.setState({cards});
  }

  handleDeleteCard(id){
    let cards = this.state.cards;
    let index = cards.findIndex(c => c.id === id);
    cards.splice(index, 1);
    this.setState({cards});
  }

  render() {
    return (
      <div className="App">
        <NewCard addCard={this.handleAddCard.bind(this)} />
        <CardDisplay onDelete={this.handleDeleteCard.bind(this)} cards={this.state.cards} />
        {/* <CardList cards={this.state.cards} /> */}
      </div>
    );
  }
}

export default App;
