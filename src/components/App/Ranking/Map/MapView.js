import React, {useState, useRef } from 'react'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import {IconLocation} from './IconLocation'
import useGeoLocation from './useGeoLocation'
import { popupContent, popupHead, popupText } from './popupStyles'

import {places} from './data1.json'

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
        <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer 
                url={osm.maptiler.url} 
                attribution={osm.maptiler.attribution}
            />
            {places.map( (places, id) => <Marker
                position={places.geometry}
                icon={IconLocation}
                key={id}
            >
                <Popup>
                    <div style={popupContent}>
                        <img
                            src={places.img}
                            width="60"
                            height="60"
                        />
                        <div style={popupHead}>
                            {places.name}
                        </div>
                        <span style={popupText}>
                        {places.geometry}
                        </span>
                    </div>
                </Popup>
            </Marker>
            )}

            {location.loaded && !location.error && (
                <Marker 
                    icon={IconLocation} 
                    position={[
                        location.coordinates.lat, 
                        location.coordinates.lng
                        ]}>
                    <Popup>
                        <b>My Current Location</b>
                        <br/>
                        <b>Lat: {location.coordinates.lat}</b>
                        <br/>
                        <b>Lng: {location.coordinates.lng}</b>
                    </Popup>

                </Marker>
            )}
        </Map>
        
    )
}

export default MapView

