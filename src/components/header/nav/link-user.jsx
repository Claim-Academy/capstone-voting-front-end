import AuthContext from "@context/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function LinkUser() {
  const [user] = useContext(AuthContext);

  return user ? (
    <li>
      <Link to={`/${user.username}`}>Manage URLs</Link>
    </li>
  ) : null;
}
