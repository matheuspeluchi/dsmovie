import FormCard from "components/FormCard";
import { useParams } from "react-router-dom";

export default function Form() {
  const { movieId } = useParams();

  return <FormCard movieId={`${movieId}`} />;
}
