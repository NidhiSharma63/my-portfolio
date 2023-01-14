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
    title: "write an title",
    summary: "",
    body: "",
  };
  return { initialValues, initialValuesForAdmin, markDownInitailValues };
}
