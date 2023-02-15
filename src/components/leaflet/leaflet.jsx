import marker from "@/restaurant.svg";
import { Icon } from "leaflet";
import PropTypes from "prop-types";
import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import View from "./view";

export default function Leaflet({ coordinates }) {
  const icon = new Icon({
    iconUrl: marker,
    iconSize: [24, 24],
  });

  return (
    <MapContainer
      // 'MapContainer' props are immutable. Therefore, map will not re-center with new coordinates.
      // * https://stackoverflow.com/questions/65894789/react-leaflet-map-center-not-changing/65900484#65900484
      center={coordinates}
      zoom={15}
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
      <View coordinates={coordinates} />
    </MapContainer>
  );
}

Leaflet.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};
