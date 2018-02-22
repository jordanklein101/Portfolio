import React from 'react'
import GoogleMapReact from 'google-map-react';


class MapContainer extends React.PureComponent {
   
    constructor(props) {
        super(props)
    }

    render() {
        const apiKey = 'GOOGLE_MAP_API_KEY'
        return (
            <GoogleMapReact
            bootstrapURLKeys={{key: apiKey}}
        defaultCenter={{ lat: 33.988346400000005,lng:  -118.3846524 }}
        defaultZoom={15}
      >
                </GoogleMapReact>
        )
    }
}

export default MapContainer