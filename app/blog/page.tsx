import styles from '@/styles/pages/blog.module.css'
import Link from 'next/link';
import { getBlogsData } from '@/lib/notion';

export default async function blog() {
  const blogs = await getBlogsData()
  return (
    <section className={styles.blog}>
      {blogs.map((blog, index) => {
        let {title, description, created_at, id} = blog
        let date = new Date(created_at)
        return (
          <div className={styles.blogContainer} key={index}>
            <article className={styles.blogPost}>
              <Link href={`/blog/${id}`}>{title}</Link>
              <p className={styles.description}>{description}</p>
              <p className={styles.date}>Publicado en: {date.toLocaleString()}</p>
            </article>
          </div>
        )
      })}
    </section>
  )
}
