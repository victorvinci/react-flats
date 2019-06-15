import React, { Component } from 'react';

import flatsData from '../../data/flatsData';
import FlatList from "../Flats-List/flatList"
import Map from "../Map/map"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedFlat: flatsData[0]
     }
  }

  center = () => {
    return {
        lat: this.state.selectedFlat.lat,
        lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flatsData[index]
    });
  }

  render() { 
    return (
      <div>
        <div className="flats-list-container">
          <FlatList flatsData={flatsData} selectFlat={this.selectFlat} selectedFlat={this.state.selectedFlat}/>
        </div>
        <Map center={this.center} lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
      </div>
    );
  }
}
 
export default App;

