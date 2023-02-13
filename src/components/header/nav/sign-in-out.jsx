import AuthContext from "@context/auth";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function SignInOut() {
  const [user, setUser] = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignInOut = (e) => {
    if (e.target.dataset.user) {
      localStorage.removeItem("token");
      setUser(null);
    }

    navigate("/sign-in");
  };

  return (
    <li className="ml-auto flex flex-col">
      {user && `Logged in as ${user.username}`}
      <Button
        variant="text"
        data-user={Boolean(user)}
        onClick={handleSignInOut}
      >
        {user ? "Sign Out?" : "Sign In"}
      </Button>
    </li>
  );
}
