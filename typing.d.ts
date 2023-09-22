type NotionDate = {
  end?: string;
  start: string;
  timezone?: string;
};

type EventData = {
  date: NotionDate;
  location: string;
  link: string;
  desc: string;
  name: string;
  cover: string;
};

type ArticleData = {
  date: NotionDate;
  author: string;
  link: string;
  desc: string;
  name: string;
  cover: string;
};
