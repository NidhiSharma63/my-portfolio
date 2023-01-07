import * as Yup from "yup";

export const ClientValidation = Yup.object().shape({
  clientName: Yup.string()
    .required("Name is required")
    .min(2, "Name should contained 2 or more characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  message: Yup.string()
    .required("Enter your message")
    .min(20, "Message should be more than 20 characters"),
});

export const AdminValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Enter your password"),
});
