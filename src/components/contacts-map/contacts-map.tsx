import { useRef } from 'react';
import { Marker } from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';

function ContactsMap(): JSX.Element {
  const mapRef = useRef(null);
  const location: [number, number] = [59.968456, 30.31759];
  const map = useMap(mapRef, location);
  if (map !== null) {
    const marker = new Marker({
      lat: location[0],
      lng: location[1],
    });
    marker.addTo(map);
  }
  return <div className="map__container" ref={mapRef} />;
}

export default ContactsMap;
