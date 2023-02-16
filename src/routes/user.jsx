import { useParams } from "react-router-dom";
import SearchForm from "../components/search-form";

export default function User() {
  const { id } = useParams();

  return (
    <>
      <h1>{id}</h1>
      <SearchForm />
    </>
  );
}
