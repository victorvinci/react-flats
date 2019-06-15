import React, { Component } from 'react';

import Flat from '../Flat-Card/flatCard'

class FlatList extends Component {
  
  flatList = () =>  { return this.props.flatsData.map((flatData) => {
    return (
      <Flat name={flatData.name} 
            price={flatData.price} 
            currency={flatData.priceCurrency} 
            imageUrl={flatData.imageUrl} 
            lat={flatData.lat} 
            lng={flatData.lng}
            key={flatData.lat}
      />
    )
  })}

  render() { 
      
    return (
      <div className="flats-list">
        {this.flatList()}
      </div>
    )
  }
}
 
export default FlatList;