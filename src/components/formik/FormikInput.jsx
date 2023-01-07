import { Field, ErrorMessage } from "formik";

import TextError from "./TextError";

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
