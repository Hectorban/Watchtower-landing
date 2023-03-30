import { Client } from '@notionhq/client'

const notion = new Client({ auth: process.env.NOTION_SECRET });

export async function fetchPageById(pageId) {
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });
  return response
}

export async function getBlogsData() {
  const blogs_database_id = process.env.BLOGS_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: blogs_database_id,
    sorts: [{
      property: "Created time",
      direction: "descending", 
    }]
  });

  return response.results.map((r) => {
    const {properties, id} = r
    const obj = {
      id,
      title: properties.Name.title[0].plain_text,
      description: properties.description.rich_text[0].plain_text,
      created_at: properties['Created time'].created_time
    } 
    return obj
  })
}



