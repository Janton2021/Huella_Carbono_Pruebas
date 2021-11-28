import React, {useState, useRef } from 'react'

import { Map, TileLayer, Marker } from 'react-leaflet'
import {IconLocation} from './IconLocation'
//import iconMarker from './IconMarker'


import useGeoLocation from './useGeoLocation'

import {places} from './data1.json'
import { paths } from 'services/routes'
import { Link } from 'react-router-dom'

import osm from './osm-providers'

import 'leaflet/dist/leaflet.css'

const MapView = () => {

    const [center, setCenter] = useState({
        
        lat: 40.41688301593396,
        lng: -3.703383694220084
        
    });
    const ZOOM_LEVEL = 9;
    const mapRef = useRef()

    const location = useGeoLocation()

    return (
        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef} style={{ width: "100%", height: "50%"}}>
            <TileLayer 
                    url={osm.maptiler.url} 
                    attribution={osm.maptiler.attribution}/>

               
                {places.map((places, id) => 
                    <Link to={paths.results}>
                        <Marker
                            position={places.geometry}
                            key={id}
                            style={{color: '#000000'}}
                            icon={IconLocation}>
                        </Marker>
                </Link>
                )}

                 {location.loaded && !location.error && (
                    <Link to={paths.results}>
                        <Marker
                            icon={IconLocation} 
                            position={[
                                location.coordinates.lat, 
                                location.coordinates.lng
                            ]}>
                        </Marker>
                    </Link>
                )}
        </Map>
    )
}

export default MapView

