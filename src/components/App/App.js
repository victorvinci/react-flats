import React, { Component } from 'react';

import flatsData from '../../data/flatsData';
import FlatList from "../Flats-List/flatList"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedFlat: ""
     }
  }

  selectFlat = (lat) => {
    this.setState({
      selectedFlat: lat
    });

    console.log(this.state.selectedFlat)
  }

  render() { 
    return (
      <div>
        <div className="flats-list-container">
          <FlatList flatsData={flatsData} selectFlat={this.selectFlat}/>
        </div>
        <div className="map-container"></div>
      </div>
    );
  }
}
 
export default App;

