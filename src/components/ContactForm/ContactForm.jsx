import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const Validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    number: Yup.number().required("Required"),
  });

  const nameId = nanoid();
  const numberId = nanoid();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: nanoid(),
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Validation}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          name="name"
          id={`${nameId}-name`}
          className={css.input}
          placeholder="Enter name"
        />
        <ErrorMessage name="name" component="span" />
        <label htmlFor="number">Number</label>
        <Field
          type="number"
          name="number"
          id={`${numberId}-number`}
          className={css.input}
          placeholder="Enter phone number"
        />
        <ErrorMessage name="number" component="span" />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
