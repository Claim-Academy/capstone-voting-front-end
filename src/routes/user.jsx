import { useParams } from "react-router-dom";
import TheForm from "../components/the-form";

export default function User() {
  const { username } = useParams();

  return (
    <>
      <h1>👋🏾 {username}</h1>
    </>
  );
}
