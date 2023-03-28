'use client'
import ContactForm from "@/components/ContactForm"
import styles from "@/styles/pages/contact.module.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function contact() {
  return (
    <>
      <section className={styles.contact}>
        <h1>Contactanos!</h1>
        <ContactForm />
      </section>
      <ToastContainer />
    </>
  )
}
