export default function useInitialValues() {
  const initialValues = {
    clientName: "",
    email: "",
    message: "",
  };

  const initialValuesForAdmin = {
    email: "",
    password: "",
  };

  return { initialValues, initialValuesForAdmin };
}
