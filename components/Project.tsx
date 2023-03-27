import styles from '@/styles/components/project.module.css'
import Image from 'next/image'

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

export default function Project({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
}: ProjectProps) {
  return (
    <article>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p className={styles.blackbox}>{description}</p>
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        priority
      />
    </article>
  )
}