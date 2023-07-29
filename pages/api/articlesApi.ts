import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";
import { Url } from "next/dist/shared/lib/router/router";

const notion = new Client({ auth: process.env.ARTICLES_SECRET });

type artRow = {
  Author: { id: string; rich_text: { text: { content: string } }[] };
  Date: { id: string; date: string };
  Link: { id: string; url: string };
  Description: { id: string; rich_text: { text: { content: string } }[] };
  Name: { id: string; title: { text: { content: string } }[] };
  Cover: { id: string; type: string; file: { url: string } };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!process.env.ARTICLES_SECRET || !process.env.ARTICLES_DB_ID)
    throw new Error("Missing secret");

  const query = await notion.databases.query({
    database_id: process.env.ARTICLES_DB_ID,
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  // @ts-ignore
  const rows = query.results.map((result) => result.properties) as artRow[];

  const rowsStruct: artStruct = rows.map((row) => ({
    date: row.Date.date,
    author: row.Author.rich_text[0].text.content,
    link: row.Link.url,
    desc: row.Description.rich_text[0].text.content,
    name: row.Name.title[0].text.content,
    cover: row.Cover?.file.url,
  }));

  const covers = query.results.map((res) => {
    const coverUrl = (res as { cover?: { file?: { url?: string } } })?.cover
      ?.file?.url;
    return coverUrl;
  });

  const rowsWithCovers = rowsStruct.map((row, index) => ({
    ...row,
    cover: covers[index],
  }));

  console.log(rowsWithCovers)

  res.status(200).json(rowsWithCovers);
}
