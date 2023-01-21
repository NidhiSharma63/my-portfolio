import { useSelector } from "react-redux";
import { blogDataInStore } from "store/blogSlice";

export default function useInitialValues() {
  const { editblog } = useSelector(blogDataInStore);

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
    title: editblog?.data?.title || "",
    summary: editblog?.data?.summary || "",
    body: editblog?.data?.body || "",
  };
  return { initialValues, initialValuesForAdmin, markDownInitailValues };
}
