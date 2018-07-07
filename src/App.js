import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots'

class  App extends Component { 
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange(event){ 
    console.log(event)
  }
  render () {
    return (
      <div className='tc'>
        <div>
          <h1>Robot Friends</h1>
          <SearchBox searchChange= {this.onSearchChange} />
          <CardList robots ={this.state.robots}/>
        </div>
      </div>
    );
  }
};


export default App;