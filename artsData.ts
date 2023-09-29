export const fetchArticlesFromNotion = async (): Promise<ArticleData[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/articlesApi`,
    {
      method: "GET",
      headers: {
        "Cache-Control": "no-store, no-cache",
      },
    }
  );
  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
};
