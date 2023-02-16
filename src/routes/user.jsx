import { useParams } from "react-router-dom";
import InputText from "../components/input-text";
import TheForm from "../components/the-form";

export default function User() {
  const { username } = useParams();

  return (
    <>
      <h1>👋🏾 {username}</h1>
      <TheForm>
        <InputText
          name="urlName"
          label="Enter a name for this URL for future reference?"
          id="url-name"
        />
      </TheForm>
    </>
  );
}
