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
  ArticleId: { id: string; rich_text: { text: { content: string } }[] };
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


  // const x = query.results.map((result) => result.properties);
  // const notionResults = query.results.map

  // console.log(notionResults)

  // if("properties" in notionResults){
  //   console.log("THIS IS HERE WE CAN MOVE ON")
  // }

  // const articleDataArray: ArticleData[] = notionResults.map((result) => {

    
  //   const article: ArticleData = {
  //     date: result.properties.Date.date,
  //     author: result.properties.Author.rich_text[0].text.content,
  //     link: result.properties.Link.url,
  //     desc: result.properties.Description.rich_text[0].text.content,
  //     name: result.properties.Name.title[0].text.content,
  //     cover: result.properties.Cover.file.url,
  //     Id: result.properties.Id.text,
  //   };
  
  //   return article;
  // });

  // console.log(query)





  // @ts-ignore
  const rows = query.results.map((result) => result.properties) as artRow[];


  const arts: ArticleData[] = rows.map((row) => ({
    date: {start: row.Date.date},
    author: row.Author.rich_text[0].text.content,
    link: row.Link.url,
    desc: row.Description.rich_text[0].text.content,
    name: row.Name.title[0].text.content,
    cover: row.Cover?.file.url,
    articleId: row.ArticleId.rich_text[0].text.content,
  }));

  const covers = query.results.map((res) => {
    const coverUrl = (res as { cover?: { file?: { url?: string } } })?.cover
      ?.file?.url;
    return coverUrl;
  });

  const rowsWithCovers = arts.map((row, index) => ({
    ...row,
    cover: covers[index],
  }));

  res.status(200).json(rowsWithCovers);
}
