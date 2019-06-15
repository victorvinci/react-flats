import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const  MapMarker = () => <div className="marker">&nbsp;</div>;

class Map extends Component {
  render() { 
    return ( 
      <div className="map-container">
        <GoogleMapReact defaultCenter={this.props.center()} defaultZoom={12}>
          <MapMarker lat={this.props.lat} lng={this.props.lng}/>
        </GoogleMapReact>
      </div>
     );
  }
}
 
export default Map;