import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

export const IconLocation = L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [35, 45],
    iconAnchor: [17, 46],
    popupAnchor: [3, -46],
    shadowSize: [35, 45],
    shadowAnchor: [17, 46]
})


