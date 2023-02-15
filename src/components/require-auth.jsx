import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/auth";

export default function RequireAuth({ children }) {
  const [user] = useContext(AuthContext);
  const { pathname } = useLocation();

  // TODO: Check pathname against user id
  // 'isSuperUser' is set from the token
  if (pathname === "/super" && !user.isSuperUser) return <Navigate to="/" />;

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};
