import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component{

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
   				<Map google={this.props.google} zoom={14}
   				 />
   			</div>
   		)
   }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAR9_HMLChf4WdyDIX3ZuDF6pZYqi9aZDI'
})(MapContainer)


