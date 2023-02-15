import AuthContext from "@context/auth";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SignInOut() {
  const [user, setUser] = useContext(AuthContext);

  const location = useLocation();

  console.log("location", location);

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
      {user && (
        <p>
          Logged in as <span className="font-bold">{user.username}</span>
        </p>
      )}
      <Button
        variant="text"
        data-user={Boolean(user)}
        onClick={handleSignInOut}
      >
        {/* If we are at 'sign-in', then don't render anything. */}
        {location.pathname === "/sign-in"
          ? null
          : // Otherwise, render the correct text based on whether we have a user.
          user
          ? "Sign Out?"
          : "Sign In"}
      </Button>
    </li>
  );
}
