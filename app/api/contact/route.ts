import { NextResponse } from 'next/server';
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_SECRET });

async function add_to_notion(email: any, name: any, message: any) {
  const databaseId = "3c911944ae4b40819c8a6fa10ffe6aa7";

  const newPage = {
    Name: { title: [{ text: { content: name } }] },
    Email: { rich_text: [{ text: { content: email } }] },
    Message: { rich_text: [{ text: { content: message } }] },
  };

  await notion.pages.create({ parent: { database_id: databaseId }, properties: newPage });
}

export async function POST(req: Request) {
  const { email, name, message } = await req.json();
  await add_to_notion(email, name, message);
  return NextResponse.json({ message: "Form submitted successfully" });
}
