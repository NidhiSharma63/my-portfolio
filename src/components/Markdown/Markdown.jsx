import React, { useState, useRef } from "react";
import MarkdownLib from "components/common/MarkDown";
import { Formik, Form } from "formik";
import useInitialValues from "hooks/useInitialValues";
import { MarkdownValidation } from "constant/validation";
import FormikInput from "components/formik/FormikInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Markdown = () => {
  const [mardown, setMarkdown] = useState("");
  const { markDownInitailValues } = useInitialValues();
  const formikRef = useRef(null);
  const notify = () => toast.success("Blog Added Successfully");
  const error = () => toast.error("Some error occurred");

  const handleSubmit = async (values) => {
    try {
      const res = await fetch(
        "https://my-project-46f18-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json",
        {
          method: "Post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              markdown: {
                title: values.title,
                summary: values.summary,
                body: values.body,
              },
            },
          }),
        }
      );
      if (res.status === 200) {
        notify();
      }
      formikRef.current.setFieldValue("body", "");
      formikRef.current.setFieldValue("title", "");
      formikRef.current.setFieldValue("summary", "");
      setMarkdown("");
    } catch (err) {
      error();
      console.log(err);
    }
  };

  const handleChange = (e) => {
    formikRef.current.setFieldValue("body", e.target.value);
    setMarkdown(e.target.value);
  };

  return (
    <div className="markdown">
      <div className="textarea-conatiner">
        <Formik
          innerRef={formikRef}
          initialValues={markDownInitailValues}
          onSubmit={handleSubmit}
          validationSchema={MarkdownValidation}
        >
          {({ values }) => (
            <Form>
              <label htmlFor="title">Title</label>
              <FormikInput id="title" name="title" />
              <label htmlFor="summary">Summary</label>
              <FormikInput component={"textarea"} id="summary" name="summary" />
              <label htmlFor="markdown">body</label>
              <FormikInput
                component={"textarea"}
                id="body"
                name="body"
                value={values.password}
                onChange={(e) => handleChange(e)}
              />
              <button type="submit">send</button>
            </Form>
          )}
        </Formik>
      </div>
      <MarkdownLib className={"show-markdown"} markdown={mardown} />
    </div>
  );
};

export default Markdown;
