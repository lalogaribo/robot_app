import React, { Component } from 'react';
import Card from './Card';
import { robots } from './robots'

class CardList extends Component {
  render() {
    const cardComponent = robots.map((user, i) => {
      return (
        <Card 
        key= {i} 
        id={ this.props.robots[i].id} 
        name={ this.props.robots[i].name} 
        username={ this.props.robots[i].username} 
        email={this.props.robots[i].email } />
      ) 
    })
    return (
      <div>
        {cardComponent}
      </div>
    );
  }
}

export default CardList;