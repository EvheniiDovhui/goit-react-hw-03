import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import styles from './ContactForm.module.css';
import { getRandomColor } from './colorUtils';

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
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        'Invalid phone number format (e.g., 227-91-26)'
      ),
  });

  const [boxShadowColor, setBoxShadowColor] = useState('#000');
  const [borderColor, setBorderColor] = useState('#3498db');

  useEffect(() => {
    setBoxShadowColor(getRandomColor());
    setBorderColor(getRandomColor());
  }, []);

  const onSubmit = (values, { resetForm }) => {
    const newContact = {
      id: `id-${Date.now()}`,
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    resetForm();
    setBoxShadowColor(getRandomColor());
    setBorderColor(getRandomColor());
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={styles.formContainer}>
        <div>
          <h1 className={styles.title}>Phonebook</h1>
          <label htmlFor="name"></label>
          <Field
            type="text"
            id="name"
            name="name"
            className={styles.formField}
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className="error" />
        </div>

        <div>
          <label htmlFor="number"></label>
          <Field
            type="text"
            id="number"
            name="number"
            className={styles.formField}
            placeholder="Number"
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
