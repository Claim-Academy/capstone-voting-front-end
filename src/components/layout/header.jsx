import PropTypes from "prop-types";
import Nav from "./nav";

export default function Header({ txt }) {
  return (
    <header>
      <h1 className="my-0 bg-gradient-to-r from-cyan-500 to-blue-500 py-8 text-center text-white">
        {txt}
      </h1>
      <Nav />
    </header>
  );
}

Header.defaultProps = {
  txt: "👋🏾 Just Pick a Place Already 🥘 📍 🗺️",
};

Header.propTypes = {
  txt: PropTypes.string,
};
