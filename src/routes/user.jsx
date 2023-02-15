import { useParams } from "react-router-dom";
import SearchForm from "../components/search-form";

export default function User() {
  const { username } = useParams();

  return (
    <>
      <h1>{username}</h1>
      <SearchForm />
    </>
  );
}
