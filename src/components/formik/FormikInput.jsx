import { Field, ErrorMessage } from "formik";

/**
 * for showing error
 */
const TextError = ({ children }) => {
  return <div style={{ color: "red", fontSize: "14px" }}>{children}</div>;
};

/**
 * for formik Input
 */
export default function FormikInput(props) {
  const { name } = props;
  return (
    <div>
      <Field {...props} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}
