import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import FormikInput from "./formik/FormikInput";
import { Formik, Form } from "formik";
import { ClientValidation } from "../constant/validation";
import useInitialValues from "../hooks/useInitialValues";

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
    <Formik
      validationSchema={ClientValidation}
      onSubmit={handleEmailSubmit}
      initialValues={initialValues}
      className="middle-section"
    >
      <Form ref={formRef}>
        <FormikInput name="clientName" placeholder="john" />
        <FormikInput name="email" placeholder="john@gmail.com" />
        <FormikInput
          name="message"
          type="textarea"
          placeholder="Hey! Nidhi...."
        />
        <button type="submit">send</button>
      </Form>
    </Formik>
  );
};

export default FormComponent;
