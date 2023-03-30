import { Client } from '@notionhq/client'
import type { Block, Page } from 'notion-api-types/responses'

const notion_client = new Client({ auth: process.env.NOTION_SECRET });

export async function getBlocksOfPageById(pageId: string) {
  const response = await notion_client.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });
  const result = response.results
  return result
}

export async function getBlogsData() {
  const blogs_database_id = process.env.BLOGS_DATABASE_ID;
  if(!blogs_database_id) {
    throw new Error('You need to setup BLOGS_DATABASE_ID ENV VAR');
  }
  const response = await notion_client.databases.query({
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

