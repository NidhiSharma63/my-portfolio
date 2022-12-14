import React, { useState, useEffect } from "react";
import "./../../assets/css/main.css";
import APP_ENDPOINTS from "src/constant/App_And_Point";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/auth";
import FormikInput from "../formik/FormikInput";
import { Formik, Form } from "formik";
import { AdminValidation } from "./../../constant/validation";
import useInitialValues from "./../../hooks/useInitialValues";
import { useNavigate } from "react-router-dom";
import TextError from "../formik/TextError";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { initialValuesForAdmin } = useInitialValues();

  useEffect(() => {
    localStorage.getItem("user") === "admin"
      ? navigate(APP_ENDPOINTS.ADMIN)
      : navigate(APP_ENDPOINTS.LOGIN);
  }, [navigate]);

  const handleSubmit = (value) => {
    const { email, password } = value;
    //
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        localStorage.setItem("user", "admin");
        navigate(APP_ENDPOINTS.ADMIN);
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <div className="contact-wrapper login">
      <p>Login</p>
      <div className="middle-section">
        <Formik
          validationSchema={AdminValidation}
          onSubmit={handleSubmit}
          initialValues={initialValuesForAdmin}
        >
          <Form>
            <FormikInput name="email" placeholder="Enter Your Email" />
            <FormikInput
              name="password"
              type="password"
              placeholder="Enter Your Password"
            />
            {error ? (
              <TextError>Either Email or Password is wrong</TextError>
            ) : null}
            <button type="submit">send</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
