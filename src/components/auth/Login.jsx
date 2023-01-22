import React, { useState, useEffect } from "react";
import "assets/css/main.css";
import APP_ENDPOINTS from "constant/App_And_Point";
import { setValueToLS } from "utlis/Localstorage";
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
    console.log(email, password);
    //
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Signed in
        if (
          email === process.env.REACT_APP_USEREMAIL &&
          password === process.env.REACT_APP_PASSWORD
        ) {
          setValueToLS("role", "admin");

          navigate(APP_ENDPOINTS.ADMIN);
          return;
        } else {
          setValueToLS("role", "user");
          navigate(APP_ENDPOINTS.Blogs);
          return;
        }
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
