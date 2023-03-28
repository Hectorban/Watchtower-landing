'use client'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "@/styles/components/contactForm.module.css"

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string().email('Invalid email').required('El email es requerido'),
  message: Yup.string().required('Mensaje es requerido'),
});

export default function ContactForm() {
  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          });

          if (response.ok) {
            const data = await response.json();
            console.log('Form submitted successfully:', data);
            resetForm();
          } else {
            console.error('Error submitting form:', response.statusText);
          }
        } catch (error) {
          console.error('Error submitting form:', error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <div>
            <label className={styles.label} htmlFor="name">Nombre</label>
            <Field className={styles.field} type="text" name="name" />
            <ErrorMessage className={styles.errorMessage} name="name" component="div" />
          </div>

          <div>
            <label className={styles.label} htmlFor="email">Email</label>
            <Field className={styles.field} type="email" name="email" />
            <ErrorMessage className={styles.errorMessage} name="email" component="div" />
          </div>

          <div className={styles.textArea}>
            <label className={styles.label} htmlFor="message">Mensaje</label>
            <Field component="textarea" name="message" />
            <ErrorMessage className={styles.errorMessageTextArea} name="message" component="div" />
          </div>

          <button className={styles.button} type="submit" disabled={isSubmitting}>
            Contactar
          </button>
        </Form>
      )}
    </Formik>
  );
}
