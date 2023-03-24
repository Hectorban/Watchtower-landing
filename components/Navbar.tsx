import Link from "next/link"
import styles from './navbar.module.css'
import { secondary_font, main_font } from "@/lib/fonts"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faTowerObservation } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <nav id={styles.nav} className={secondary_font.className}>
      <ul>
        <li id={styles.name}>
          <h1 className={main_font.className}>
            <Link className={styles.link} href="/">
              <FontAwesomeIcon aria-hidden="true" icon={faTowerObservation} /> 
              <span>Watchtower Vision</span>
            </Link>
          </h1>
        </li>
        <li><Link className={styles.link} href="/about">Acerca</Link></li>
        <li><Link className={styles.link} href="/projects">Proyectos</Link></li>
        <li><Link className={styles.link} href="/blog">Blog</Link></li>
        <li>
          <Link className={styles.link} href="/">
            <FontAwesomeIcon aria-hidden="true" icon={faLinkedin} /> 
            <span className="sr-only">LinkedIn</span>
          </Link>
        </li>
        <li>
          <Link className={styles.link} href="https://twitter.com/WatchTower_V">
            <FontAwesomeIcon aria-hidden="true" icon={faTwitter} />
            <span className="sr-only">Twitter</span>
          </Link>
        </li>
        <li><Link className={styles.button} href="/contact">Contactanos</Link></li>
      </ul>
    </nav>
  )
}
