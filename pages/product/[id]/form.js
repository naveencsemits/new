import { useRouter } from "next/router";


import MultiStepForm from "../../../components/MultiStepForm";
import data from "../../../utils/seed";

const Form = () => {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <div>Loading...</div>;
  }
  return data[id] ? (
    <MultiStepForm data={data[id]["form"]} />
  ) : (
    <h2>Product not found</h2>
  );
};

export default Form;
