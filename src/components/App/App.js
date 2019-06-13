import React, { Component } from 'react';
import logo from '../../assets/logos/logo.svg';
import '../../styles/components/_cards.scss';

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
        <div className="map"></div>
      </div>
    );
  }
}
 
export default App;

