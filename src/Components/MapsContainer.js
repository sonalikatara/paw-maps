import React, { Component } from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react'
import { getLocation } from '../Services/searchResults'
export class MapContainer extends Component{

   constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
   // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);

   }


   onMarkerClick= (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

   onMapClicked= (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

  }


   render() {
   	const style = {
      width: '100%',
      height: '100%'
    }
    let lng =  this.props.longitude
    let lat= this.props.latitude
    const pos = {
      lat,
      lng
    }

     /*pos.lat = this.props.latitude
     pos.lng = this.props.longitude*/
     console.log("Pos:" + pos)


   	if(!this.props.loaded){
   		return <div> Loading ... </div>
   	}
   	return(
   			<div style={ style } >
   				<Map
              google={this.props.google}
              style={ style }
              center={ pos }
              zoom={15}
              onClick={this.onMapClicked}
              >
   					 <Marker onClick={this.onMarkerClick}
                name={'Current location'}
                position={pos}
                />
             <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
   				</Map>
   			</div>
   		)
   }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI'
})(MapContainer)


