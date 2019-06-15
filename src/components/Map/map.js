import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const  MapMarker = (props) => <div className="marker">{props.name}</div>;

class Map extends Component {
  render() { 
    return ( 
      <div className="map-container">
        <GoogleMapReact defaultCenter={this.props.center()} defaultZoom={12}>
          <MapMarker lat={this.props.lat} lng={this.props.lng} name={this.props.name}/>
        </GoogleMapReact>
      </div>
     );
  }
}
 
export default Map;