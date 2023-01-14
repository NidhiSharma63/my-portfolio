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

  const markDownInitailValues = {
    title: "",
    summary: "",
    body: "",
  };
  return { initialValues, initialValuesForAdmin, markDownInitailValues };
}
