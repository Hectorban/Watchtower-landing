import Link from "next/link"
import styles from "@/styles/pages/index.module.css"
import { main_font, secondary_font } from "@/lib/fonts"
import Project from "@/components/Project"

export default async function Home() {
  return (
    <>
      <section id={styles.intro}>
        <p className={secondary_font.className}>Hola, somos <span id={styles.span} className={main_font.className}>WatchTower Vision.</span></p>
        <h2>Creamos experiencias audiovisuales.</h2>
        <p>Somos un grupo de expertos en Esports, Tecnologias web y organizacion de eventos.</p>
        <p>Actualmente estamos trabajando en <Link href="https://twitter.com/WatchTower_V/status/1638272473199267843">Meca Fest 2023</Link>.</p>
      </section>
      <div className={styles.gradient}></div>
      <div id={styles.sectionlblue}>
        <section id={styles.projects}>
          <h2>Nuestros proyectos</h2>
          <Project
            title="Torneo Nacional de Free Fire, Aguascalientes"
            description="El objetivo de este torneo es fomentar la cultura gamer y el deporte electrónico en México, brindando a los jugadores locales la oportunidad de demostrar sus habilidades y competir en un ambiente amistoso, emocionante y competitivo. Además, el torneo busca promover la inclusión y diversidad en la comunidad gamer, permitiendo a jugadores de diferentes edades, géneros y habilidades participar en igualdad de condiciones. Asimismo, se busca fortalecer la comunidad gamer en Aguascalientes y establecer una competición de referencia en la región, que permita a los participantes mejorar sus habilidades y aprender de otros jugadores."
            imageSrc="/Torneofreefire.jpeg"
            imageAlt="Rocket League: Fire and ice"
            imageWidth={540}
            imageHeight={540}
          />
        </section>
      </div>
      <div className={styles.gradient}></div>
      <div id={styles.sectionRed}>
        <section id={styles.contact}>
          <h2>Contactanos</h2>
          <p>Estamos interesados en escuchar nuevas propuestas e innovaciones en el campo de los Esports</p>
          <p><Link className={styles.button} href="/contact">Contacto</Link></p>
          <p>O escribenos a: <Link href="mailto:contacto@watchtowervision.com">contacto@watchtowervision.com</Link></p>
        </section>
      </div>
      <div className={styles.gradient}></div>
    </>
  )
}
