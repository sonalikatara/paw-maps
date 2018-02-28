import React, { Component } from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import { fetchResults } from '../Services/searchResults'
export class MapContainer extends Component{

    state ={
    	activeMarkers: []
    }

    /* componentDidMount = () =>{
    	fetchResults().then((json)=>{
    		this.setState({activeMarkers: json....},)
    	})
    }

  constructor(props) {
   	super(props);
   	this.state = {
   	  showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
   	}
   // binding this to event-handler functions
   	this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
   }

   onMarkerClick: function(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

   onMapClicked: function(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }

  }*/


   render() {
   	const style = {
      width: '100vw',
      height: '100vh'
    }
   	if(!this.props.loaded){
   		return <div> Loading ... </div>
   	}
   	return(
   			<div style={ style } >
   				<Map google={this.props.google} zoom={14}>
   					<Marker name={'Current location'} />
   				</Map>
   			</div>
   		)
   }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI'
})(MapContainer)


