import Alert from "@mui/material/Alert";
import LinkHome from "../components/link-home";

export default function ProtectedErrorBoundary() {
  return (
    <div className="my-8 flex flex-col items-center gap-y-4">
      <Alert severity="error">
        You&apos;re not authorized in this area 🔫!
      </Alert>
      <LinkHome />
    </div>
  );
}
