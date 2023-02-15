import PropTypes from "prop-types";
import { useMap } from "react-leaflet/hooks";

const { VITE_LEAFLET_ZOOM } = import.meta.env;

export default function View({ coordinates }) {
  const map = useMap();
  map.setView(coordinates, VITE_LEAFLET_ZOOM);

  return null;
}

View.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};
