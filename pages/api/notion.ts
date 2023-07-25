import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Url } from "next/dist/shared/lib/router/router";


const notion = new Client({ auth: process.env.NOTION_SECRET });

type Row = {
  Date: { id: string; date: string };
  Location: { id: string; rich_text: { text: { content: string } }[] };
  Link: { id: string; url: string };
  Description: { id: string; rich_text: { text: { content: string } }[] };
  Name: { id: string; title: { text: { content: string } }[] };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.NOTION_SECRET || !process.env.NOTION_DB_ID) throw new Error("Missing secret");

  const query = await notion.databases.query({
    database_id: process.env.NOTION_DB_ID,
  });

  // @ts-ignore
  const rows = query.results.map((result) => result.properties) as Row[];

  const rowsStruct: rowsStruct = rows.map((row) => ({
    date: row.Date.date,
    location: row.Location.rich_text[0].text.content,
    link: row.Link.url,
    desc: row.Description.rich_text[0].text.content,
    name: row.Name.title[0].text.content,
  }));

  //console.log(JSON.stringify(rowsStruct))
  //console.log("HELLO NAREN")
  res.status(200).json((rowsStruct));
}