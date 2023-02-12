import { useContext } from "react";
import AuthContext from "@context/auth";

export default function Nav() {
  const user = useContext(AuthContext);

  return user && <small>Logged in as: {user.username}</small>;
}
