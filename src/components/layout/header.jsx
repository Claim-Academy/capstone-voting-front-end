import PropTypes from "prop-types";

export default function Header({ txt }) {
  return (
    <header>
      <h1 className="my-0 bg-gradient-to-r from-cyan-500 to-blue-500 py-8 text-center text-white">
        {txt}
      </h1>
    </header>
  );
}

Header.defaultProps = {
  txt: "👋🏾 Just Pick a Place Already 🥘 📍 🗺️",
};

Header.propTypes = {
  txt: PropTypes.string,
};
