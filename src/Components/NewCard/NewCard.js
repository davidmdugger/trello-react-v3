import React, { Component } from 'react';
import uuid from 'uuid';
import './NewCard.css';

class AddCard extends Component {
  constructor(){
    super();
    this.state = {
      newCard: {

      }
    }
  }

  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert("Title is Required.");
    } else{
      this.setState({newCard: {
        id: uuid.v4(),
        title: this.refs.title.value,
        description: this.refs.description.value
      }}, function(){
        this.props.addCard(this.state.newCard);
      });
    }
    // console.log(this.refs.title.value + " " + this.refs.description.value);
    e.preventDefault();
  }

  render() {
    return (
      <div className="NewCard">
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input placeholder="New Title" type="text" ref="title" />
            <input placeholder="New Descripton" type="text" ref="description" />
          <input type="submit" value="New Card" />
        </form>
      </div>
    );
  }
}

export default AddCard;
