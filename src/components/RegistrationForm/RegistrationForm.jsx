import css from "./RegistrationForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const Validation = Yup.object().shape({
    name: Yup.string()
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
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => {
        toast.success("Account created");
      })
      .catch(() => toast.error("Registration failed. Please, try again"));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <Field as={TextField} variant="standard" label="Username" name="name" />
        <ErrorMessage name="name" component="span" className={css.error} />
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
