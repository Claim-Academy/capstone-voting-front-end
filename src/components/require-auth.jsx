import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/auth";

export default function RequireAuth({ children }) {
  const [user] = useContext(AuthContext);

  const { pathname } = useLocation();

  // If it's 'super-admin'...
  if (pathname === "/super-admin" && !user.isSuperAdmin)
    return <Navigate to="/" />;

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node,
};
