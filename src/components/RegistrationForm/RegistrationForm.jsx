import css from "./RegistrationForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";

export default function RegistrationForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };
  const Validation = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(5, "Too short!")
      .max(25, "Too long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field
          as={TextField}
          variant="standard"
          label="Username"
          name="username"
        />
        <ErrorMessage name="username" component="span" className={css.error} />
        <Field
          as={TextField}
          variant="standard"
          label="Email"
          name="email"
          type="email"
        />
        <ErrorMessage name="email" component="span" className={css.error} />
        <Field
          as={TextField}
          variant="standard"
          label="Password"
          name="password"
          type="password"
        />
        <ErrorMessage name="password" component="span" className={css.error} />
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
