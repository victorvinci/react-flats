import React, { Component } from 'react';
import logo from '../../assets/logos/logo.svg';

import FlatList from "../Flats-List/flatList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <div className="flats-list">
          <FlatList />
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}
 
export default App;

