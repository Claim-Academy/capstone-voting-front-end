import { useParams } from "react-router-dom";
import TheForm from "../components/the-form";

export default function User() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <TheForm />
    </>
  );
}
