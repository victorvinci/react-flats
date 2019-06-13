import React, { Component } from 'react';

import flatsData from '../../data/flatsData';
import FlatCard from "../Flat-Card/flatCard";

class FlatList extends Component {
  
  flatArray = () =>  { return flatsData.map((flatData) => {
    return (
        <div className="card">
          <h2 className="card-title">{flatData.name}</h2>
          <p className="card-price">{flatData.price} {flatData.priceCurrency}</p>
          <img className="card-img" alt="" src={flatData.imageUrl}></img>
          <a className="card-link" href="#"></a>
        </div>
    )
  })}

  render() { 
      
    return (
      <div className="flats-list-container">
        {this.flatArray()}
      </div>
    )
  }
}
 
export default FlatList;