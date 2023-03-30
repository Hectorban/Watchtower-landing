import styles from '@/styles/pages/blogSlug.module.css'
import { fetchPageById } from "@/lib/notion"
import CodeSnippet from '@/components/CodeSnippet'

export default async function blogPost({params}) {
  const {slug} = params
  const page = await fetchPageById(slug)
  return(
    <section className={styles.blogPost}>
      {page.results.map((block, index) => {
        const {type} = block
        if(type === "heading_1"){
          return (
            <h1 key={index}>{block.heading_1.rich_text[0].plain_text}</h1>
          )
        }
        if(type === "paragraph") {
          if(block.paragraph.rich_text.length === 0) {
            return <p key={index}></p>
          }
          return (
            <p key={index}>{block.paragraph.rich_text[0].plain_text}</p>
          )
        }
        if(type === "code") {
          return (
            <CodeSnippet
              key={index}
              language={block.code.language}
              code={block.code.rich_text[0].plain_text}
            />
          )
        }
        if(type === "table") {
          console.log(block)
        }
        return (
          <h1 key={index}>Este tipo {type} todavia no esta soportado!</h1>
        )
      })}
    </section>
  )
}
