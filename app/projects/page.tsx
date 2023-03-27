import Project from "@/components/Project"
import styles from "@/styles/pages/projects.module.css"

export default function projects() {
  return (
    <div id={styles.sectionlblue}>
      <section id={styles.projects}>
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
  )
}
