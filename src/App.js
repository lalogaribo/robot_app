import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots'
import './App.css'

class  App extends Component { 
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: ''
    }
  }

  onSearchChange = (event) =>{ 
    this.setState({searchField: event.target.value })
  }

  render () {
      const filterRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return (
      <div className='tc'>
        <div>
          <h1 className='f1'>Robot Friends</h1>
          <SearchBox searchChange= {this.onSearchChange} />
          <CardList robots ={filterRobots}/>
        </div>
      </div>
    );
  }
};


export default App;