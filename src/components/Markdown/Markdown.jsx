import React, { useState, useRef } from "react";
import MarkdownLib from "components/common/MarkDown";
import { Formik, Form } from "formik";
import useInitialValues from "hooks/useInitialValues";
import { MarkdownValidation } from "constant/validation";
import FormikInput from "components/formik/FormikInput";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uuidv4 } from "@firebase/util";
import { useSelector } from "react-redux";
import { auth, db } from "auth/auth";

import { blogDataInStore } from "store/blogSlice";
import { set, ref, update } from "firebase/database";

const Markdown = () => {
  const [mardown, setMarkdown] = useState("");
  const { markDownInitailValues } = useInitialValues();
  const { isEdit, editBlogUuid } = useSelector(blogDataInStore);

  const formikRef = useRef(null);
  const notify = () => toast.success("Blog Added Successfully");
  const notifyEdit = () => toast.success("Blog Edit Successfully");

  const handleSubmit = async (values) => {
    if (!isEdit) {
      const uuid = uuidv4();
      set(ref(db, `${auth.currentUser.uid}/${uuid}`), {
        data: {
          id: uuid,
          title: values.title,
          summary: values.summary,
          body: values.body,
          Comments: [],
        },
      }).then(() => {
        notify();
      });
      return;
    } else {
      update(ref(db, `${auth.currentUser.uid}/${editBlogUuid}`), {
        data: {
          id: editBlogUuid,
          title: values.title,
          summary: values.summary,
          body: values.body,
        },
      }).then(() => {
        notifyEdit();
      });
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
                value={values.body}
                onChange={(e) => handleChange(e)}
              />
              {isEdit ? (
                <button type="submit">Save Edit</button>
              ) : (
                <button type="submit">Save</button>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <MarkdownLib className={"show-markdown"} markdown={mardown} />
    </div>
  );
};

export default Markdown;
