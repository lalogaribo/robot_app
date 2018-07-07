import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'

class  App extends Component { 
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robo => this.setState({ robots: robo }))
  }
  onSearchChange = (event) =>{ 
    this.setState({searchField: event.target.value })
  }

  render () {
      const { robots, searchField } = this.state;
      const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    if (!robots.length) {
      return <h2>Loading robots</h2>
    } else {
      return (
        <div className='tc'>
          <div>
            <h1 className='f1'>Robot Friends</h1>
            <SearchBox searchChange= {this.onSearchChange} />
            <Scroll>
              <CardList robots ={filterRobots}/>
            </Scroll>
          </div>
        </div>
      );
    }
  }
};


export default App;