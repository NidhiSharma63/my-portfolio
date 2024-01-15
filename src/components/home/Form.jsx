import emailjs from "@emailjs/browser";
import FormikInput from "components/formik/FormikInput";
import {ClientValidation} from "constant/validation";
import {Form, Formik} from "formik";
import useInitialValues from "hooks/useInitialValues";
import React, {useRef} from "react";

const FormComponent = ({setEmailConfirmation}) => {
  const formRef = useRef(null);
  const {initialValues} = useInitialValues();
  const handleEmailSubmit = (value) => {
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_KEY
      )
      .then(() => {
        setEmailConfirmation(true);
      });
  };
  return (
    <div className="middle-section">
      <Formik validationSchema={ClientValidation} onSubmit={handleEmailSubmit} initialValues={initialValues}>
        <Form ref={formRef}>
          <FormikInput name="clientName" placeholder="john" />
          <FormikInput name="email" placeholder="john@gmail.com" />
          <FormikInput name="message" component="textarea" placeholder="Hey! Nidhi...." />
          <button type="submit">send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
