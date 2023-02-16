import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/auth";

export default function RequireAuth({ children }) {
  const [user] = useContext(AuthContext);

  const { pathname } = useLocation();

  // 'isSuperUser' is set from the token, as well as the user's id
  if (
    (pathname === "/super" && !user.isSuperUser) ||
    // Remove the leading slash
    pathname.slice(1) !== user.id
  )
    return <Navigate to="/" />;

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};
