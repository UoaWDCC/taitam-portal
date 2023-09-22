export const fetchEventsFromNotion = async (): Promise<EventData[]> => {
  const res = await fetch(`${process.env.API_ENDPOINT}/notion`, {
    method: "GET",
    headers: {
      "Cache-Control": "no-store, no-cache",
    },
  });
  const data = await res.json();
  return JSON.parse(JSON.stringify(data));
};
