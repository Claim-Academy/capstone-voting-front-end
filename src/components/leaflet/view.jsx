import PropTypes from "prop-types";
import { useMap } from "react-leaflet/hooks";

export default function View({ coordinates }) {
  const map = useMap();
  map.setView(coordinates, map.getZoom());

  return null;
}

View.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
};
