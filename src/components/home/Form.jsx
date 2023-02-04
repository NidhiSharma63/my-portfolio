import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormikInput from "components/formik/FormikInput";
import { Formik, Form } from "formik";
import { ClientValidation } from "constant/validation";
import useInitialValues from "hooks/useInitialValues";

const FormComponent = ({ setEmailConfirmation }) => {
  const formRef = useRef(null);
  const { initialValues } = useInitialValues();
  const handleEmailSubmit = (value) => {
    emailjs
      .sendForm(
        "service_g5wb7nq",
        "template_rwo6xed",
        formRef.current,
        "Nw9mYKs-BMJleDqIB"
      )
      .then(() => {
        setEmailConfirmation(true);
      });
  };
  return (
    <div className="middle-section">
      <Formik
        validationSchema={ClientValidation}
        onSubmit={handleEmailSubmit}
        initialValues={initialValues}
      >
        <Form ref={formRef}>
          <FormikInput name="clientName" placeholder="john" />
          <FormikInput name="email" placeholder="john@gmail.com" />
          <FormikInput
            name="message"
            component="textarea"
            placeholder="Hey! Nidhi...."
          />
          <button type="submit">send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
