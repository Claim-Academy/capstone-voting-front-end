import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export default function HomeLink() {
  return (
    <Link to="/" className="flex items-center gap-x-1">
      <HomeIcon />
      Home 🏠
    </Link>
  );
}
