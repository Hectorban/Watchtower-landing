import ContactForm from "@/components/ContactForm"
import styles from "@/styles/pages/contact.module.css"

export default async function contact() {
  return (
    <section className={styles.form}>
      <h1>Contactanos!</h1>
      <ContactForm />
    </section>
  )
}
