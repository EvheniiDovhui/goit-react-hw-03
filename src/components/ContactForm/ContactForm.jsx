import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = object({
    name: string()
      .required('Name is required')
      .min(3, 'Min length is 3')
      .max(50, 'Max length is 50'),
    number: string()
      .required('Number is required')
      .min(3, 'Min length is 3')
      .max(50, 'Max length is 50'),
  });

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: `id-${Date.now()}`,
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.formContainer}>
        <div>
          <label htmlFor="name">Name:</label>
          <Field
            type="text"
            id="name"
            name="name"
            className={styles.formField}
          />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="number">Number:</label>
          <Field
            type="text"
            id="number"
            name="number"
            className={styles.formField}
          />
          <ErrorMessage name="number" component="div" className="error" />
        </div>

        <button type="submit" className={styles.submitButton}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
