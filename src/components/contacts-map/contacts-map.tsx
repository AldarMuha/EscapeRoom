import { useRef } from 'react';
import { Marker, icon } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

const URL_MARKER_DEFAULT = '/img/svg/pin-default.svg';

function ContactsMap(): JSX.Element {
  const mapRef = useRef(null);
  const location: [number, number] = [59.968456, 30.31759];
  const map = useMap(mapRef, location);
  if (map) {
    const iconMap = icon({
      iconUrl: URL_MARKER_DEFAULT,
      iconSize: [52, 52],
      iconAnchor: [26, 52],
    });
    const marker = new Marker({
      lat: location[0],
      lng: location[1],
    });
    marker
      .setIcon(iconMap)
      .addTo(map);
  }
  return <div className="map__container map" id='map' ref={mapRef} />;
}

export default ContactsMap;
