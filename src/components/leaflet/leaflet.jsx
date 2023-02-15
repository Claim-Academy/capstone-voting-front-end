import marker from "@/restaurant.svg";
import { Icon } from "leaflet";
import PropTypes from "prop-types";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import View from "./view";

const { VITE_LEAFLET_ZOOM } = import.meta.env;

export default function Leaflet({ coordinates }) {
  const icon = new Icon({
    iconUrl: marker,
    iconSize: [24, 24],
  });

  return (
    <MapContainer
      center={coordinates}
      zoom={VITE_LEAFLET_ZOOM}
      scrollWheelZoom={false}
      style={{
        height: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates} icon={icon} />

      {/* https://stackoverflow.com/questions/65894789/react-leaflet-map-center-not-changing/65900484#65900484
       */}
      <View coordinates={coordinates} />
    </MapContainer>
  );
}

Leaflet.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};
