import styles from '@/styles/components/footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h2>WatchTower Vision</h2>
      <ul>
        <li>
          <Link href="/">
            <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} /> 
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/WatchTower_V">
            <FontAwesomeIcon aria-hidden="true" icon={faTwitter} /> 
            <span className="sr-only">Twitter</span>
          </Link>
        </li>
        <li>
          <Link href="mailto:contacto@watchtowervision.com">
            <FontAwesomeIcon aria-hidden="true" icon={faEnvelope} /> 
            <span className="sr-only">Email</span>
          </Link>
        </li>
      </ul>
      <p id={styles.copyright}>© 2023 WatchTower Vision. Todos los derechos reservados</p>
    </footer>
  )
}
