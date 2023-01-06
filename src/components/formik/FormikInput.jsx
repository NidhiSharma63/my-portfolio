import { Field, ErrorMessage } from "formik";

/**
 * for showing error
 */
const TextError = ({ children }) => {
  return <div className="error">{children}</div>;
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
