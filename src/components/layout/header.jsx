import PropTypes from "prop-types";
import Nav from "./nav/nav";

export default function Header({ txt }) {
  return (
    <header className="my-0 bg-gradient-to-r from-cyan-500 to-blue-500 pt-8  text-white">
      <h1 className="text-center">{txt}</h1>
      <Nav className="text-right" />
    </header>
  );
}

Header.defaultProps = {
  txt: "👋🏾 Just Pick a Place Already 🥘 📍 🗺️",
};

Header.propTypes = {
  txt: PropTypes.string,
};
