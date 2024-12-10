import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import { useMap } from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { BookingInfo } from '../../types/types';
import { useAppDispatch } from '../../hooks';
import { setBookingId } from '../../store/site-process/site-process';

const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';

type MapProps = {
  bookings: BookingInfo[];
};

function Map({ bookings }: MapProps): JSX.Element {
  const dispatch = useAppDispatch();
  const mapRef = useRef(null);
  const map = useMap(mapRef, bookings[0].location.coords);
  const iconMap = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  useEffect(() => {
    if (map) {
      bookings.forEach((booking) => {
        const marker = new Marker({
          lat: booking.location.coords[0],
          lng: booking.location.coords[1],
        });
        marker
          .setIcon(iconMap)
          .addTo(map)
          .on('click', () => dispatch(setBookingId(booking.id)));
      }, [map, bookings]);
    }
  });
  return <div className="map__container map" id="map" ref={mapRef} />;
}

export default Map;
